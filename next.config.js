const compose = require('next-compose');
const withBundleAnalyzer = require('@next/bundle-analyzer');
// const withCSS = require('@zeit/next-css');


module.exports = compose([
    // [withCSS],
    [withBundleAnalyzer({enabled: process.env.ANALYZE === 'true'})],

    {
        env: {
            OPEN_WEATHER_MAP_API: process.env.OPEN_WEATHER_MAP_API,
            ALGOLIA_PLACES_APP_ID : process.env.ALGOLIA_PLACES_APP_ID,
            ALGOLIA_PLACES_API_KEY : process.env.ALGOLIA_PLACES_API_KEY
        },
    }
]);
