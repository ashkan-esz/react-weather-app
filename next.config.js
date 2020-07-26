// const compose = require('next-compose');
// const withBundleAnalyzer = require('@next/bundle-analyzer');
// const withCSS = require('@zeit/next-css');


module.exports = {
    // compose([
    // [withCSS],
    // [withBundleAnalyzer({enabled: process.env.ANALYZE === 'true'})],

    env: {
        OPEN_WEATHER_MAP_API: process.env.OPEN_WEATHER_MAP_API,
    },
}
