const axios = require("axios").default;

export default (req, res) => {
    if (req.method === 'GET') {
        const api_key = process.env.OPEN_WEATHER_MAP_API;
        const {query: {name}} = req;

        const weather = `https://api.openweathermap.org/data/2.5/weather?q=${name}&APPID=${api_key}&units=metric`;
        const forecast = `https://api.openweathermap.org/data/2.5/forecast?q=${name}&APPID=${api_key}&units=metric`;

        function getWeather() {
            return axios.get(weather)
        }

        function getForecast() {
            return axios.get(forecast);
        }

        return Promise.all([getWeather(), getForecast()])
            .then(([res1, res2]) => {
                res.status(200).send([res1.data, res2.data]);
            }).catch((error) => {
                res.status(404).json(null);
            });
    }
}

