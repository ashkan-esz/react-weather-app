import React, {useState} from "react";
import {css} from "@emotion/core";
import AppTitle from "../components/AppTitle";
import Result from "../components/Result";
import NotFound from "../components/NotFound";
import SearchCity from "../components/SearchCity";

const axios = require("axios").default;


const Home = () => {
    const [value,setValue] = useState('');
    const [weatherInfo,setWeatherInfo] = useState(null);
    const [error,setError] = useState(false);

    const handleInputChange = input => {
        setValue(input);
        if (input === '') {
            setWeatherInfo(null);
            setError(false);
        }
    };

    const handleSearchCity = e => {
        e.preventDefault();
        axios.get(`./api/weather_api/${value}`).then(response => {
            const weather_data = response.data[0];
            const forecast_data = response.data[1];

            const months = ['January', 'February', 'March', 'April', 'May', 'June',
                'July', 'August', 'September', 'October', 'Nocvember', 'December',
            ];
            const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            const currentDate = new Date();
            const date = `${days[currentDate.getDay()]} ${currentDate.getDate()} ${months[currentDate.getMonth()]}`;
            const sunset = new Date(weather_data.sys.sunset * 1000).toLocaleTimeString().slice(0, 4);
            const sunrise = new Date(weather_data.sys.sunrise * 1000).toLocaleTimeString().slice(0, 4);

            const weatherInfo = {
                city: weather_data.name,
                country: weather_data.sys.country,
                date,
                description: weather_data.weather[0].description,
                main: weather_data.weather[0].main,
                temp: weather_data.main.temp,
                highestTemp: weather_data.main.temp_max,
                lowestTemp: weather_data.main.temp_min,
                sunrise,
                sunset,
                clouds: weather_data.clouds.all,
                humidity: weather_data.main.humidity,
                wind: weather_data.wind.speed,
                forecast: forecast_data.list,
            };
            setWeatherInfo(weatherInfo);
            setError(false);
        }).catch(() => {
            // console.log(error);
            setWeatherInfo(null);
            setError(true);
        });
    };


    return (
        <div>
            <AppTitle
                show={ (weatherInfo || error) && true}>
                Weather app
            </AppTitle>

            <div css={style}>
                <AppTitle
                    title
                    hide={((weatherInfo || error) && true)}>
                    Weather app
                </AppTitle>

                <SearchCity
                  showResult={((weatherInfo || error) && true)}
                  change={handleInputChange}
                  submit={handleSearchCity}
                />

                {weatherInfo && <Result weather={weatherInfo} />}
                {error && <NotFound error={error} />}
            </div>
        </div>
    )
}

const style = css`
  max-width: 1500px;
  margin: 0 auto;
  height: calc(100vh - 64px);
  width: 100%;
  position: relative;
`;

export default Home;

