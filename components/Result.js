import React from 'react';
import PropTypes from 'prop-types'
import {css, keyframes} from '@emotion/core';
import device from './Device';
import ForecastHour from './ForecastHour';
import BigLabel from './BigLabel';
import MediumLabel from './MediumLabel';
import SmallLabel from './SmallLabel';
import Text from './Text';
import WeatherIcon from "./WeatherIcon";

const Result = ({ weather }) => {

    const {
        city,
        country,
        date,
        description,
        main,
        temp,
        sunset,
        sunrise,
        humidity,
        wind,
        highestTemp,
        lowestTemp,
        forecast,
    } = weather;

    const forecasts = forecast.map(item => (
        <ForecastHour
            key={item.dt}
            temp={Math.floor(item.main.temp * 1)}
            icon={item.weather[0].icon}
            month={item.dt_txt.slice(5, 7)}
            day={item.dt_txt.slice(8, 10)}
            hour={item.dt_txt.slice(11, 13) * 1}
        />
    ));

    return (
        <div css={style}>

            <div className={'location-wrapper'}>
                <BigLabel>
                    {city}, {country}
                </BigLabel>
                <SmallLabel weight="400">{date}</SmallLabel>
            </div>

            <div className={'current-weather-wrapper'}>

                <WeatherIcon main={main}/>

                <div>
                    <h3 className={'temperature'}>{Math.floor(temp)}&#176;</h3>
                    <SmallLabel weight="400" firstToUpperCase>
                        {description}
                    </SmallLabel>
                </div>
            </div>

            <div className={'weather-details-wrapper'}>
                <div className={'weather-detail'}>
                    <SmallLabel align="center" weight="400">
                        {Math.floor(highestTemp)}&#176;
                    </SmallLabel>
                    <Text align="center">Hight</Text>
                </div>
                <div className={'weather-detail'}>
                    <SmallLabel align="center" weight="400">
                        {wind}mph
                    </SmallLabel>
                    <Text align="center">Wind</Text>
                </div>
                <div className={'weather-detail'}>
                    <SmallLabel align="center" weight="400">
                        {sunrise}
                    </SmallLabel>
                    <Text align="center">Sunrise</Text>
                </div>
                <div className={'weather-detail'}>
                    <SmallLabel align="center" weight="400">
                        {Math.floor(lowestTemp)}&#176;
                    </SmallLabel>
                    <Text align="center">Low</Text>
                </div>
                <div className={'weather-detail'}>
                    <SmallLabel align="center" weight="400">
                        {humidity}%
                    </SmallLabel>
                    <Text align="center">Rain</Text>
                </div>
                <div className={'weather-detail'}>
                    <SmallLabel align="center" weight="400">
                        {sunset}
                    </SmallLabel>
                    <Text align="center">Sunset</Text>
                </div>
            </div>
            <div className={'forecast-wrapper'}>
                <MediumLabel weight="400">Forecast</MediumLabel>
                <div className={'forecast'}>{forecasts}</div>
            </div>
        </div>
    );
};

const fade_in_animation = keyframes`
  to {
        opacity: 1;
        visibility: visible;
        top: 0;
  }
`;

const style = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 40px 0;
  opacity: 0;
  visibility: hidden;
  position: relative;
  top: 20px;
  animation: ${fade_in_animation} 0.5s 1.4s forwards;
  
  .location-wrapper{
    flex-basis: 100%;
  }
  
  .current-weather-wrapper{
    flex-basis: 100%;
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: auto 1fr;
  margin: 20px 0;
  grid-gap: 30px;
  @media ${device.mobileL} {
    flex-basis: 50%;
    padding-right: 10px;
  }
  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr;
    padding-right: 20px;
  }
  }
  
  .temperature{
    display: block;
  font-size: 50px;
  font-weight: 400;
  color: #ffffff;
  @media ${device.tablet} {
    font-size: 70px;
  }
  @media ${device.laptop} {
    font-size: 90px;
  }
  @media ${device.laptopL} {
    font-size: 110px;
  }
  }
  
  .weather-details-wrapper{
    flex-basis: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 10px 0;
  margin: 20px 0;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  align-self: flex-start;
  @media ${device.mobileL} {
    flex-basis: 50%;
  }
  }
  
  .weather-detail{
    flex-basis: calc(100% / 3);
  padding: 10px;
  @media ${device.laptop} {
    padding: 20px 10px;
  }
  }
  
  .forecast-wrapper{
  flex-basis: 100%;
  margin: 20px 0;
  overflow: hidden;
  }
  
  .forecast{
    position: relative;
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  scrollbar-color: lightgray #ffffff;
  scrollbar-width: thin;
  margin-top: 20px;
  padding-bottom: 20px;
  @media ${device.laptop} {
    order: 4;
  }
  }
`;

Result.propTypes = {
    weather: PropTypes.shape({
        city: PropTypes.string,
        country: PropTypes.string,
        date: PropTypes.string,
        description: PropTypes.string,
        main: PropTypes.string,
        temp: PropTypes.number,
        sunrise: PropTypes.string,
        sunset: PropTypes.string,
        humidity: PropTypes.number,
        wind: PropTypes.number,
        highestTemp: PropTypes.number,
        lowestTemp: PropTypes.number,
        forecast: PropTypes.array,
    }).isRequired,
};

export default Result;
