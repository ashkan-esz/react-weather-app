const compose = require('next-compose');
const withBundleAnalyzer = require('@next/bundle-analyzer');
// const withCSS = require('@zeit/next-css');


module.exports = compose([
    // [withCSS],
    [withBundleAnalyzer({enabled: process.env.ANALYZE === 'true'})],
    // [env = {OPEN_WEATHER_MAP_API: process.env.OPEN_WEATHER_MAP_API}]
    // [env = ({OPEN_WEATHER_MAP_API: process.env.OPEN_WEATHER_MAP_API})]
    {
        env: {
            OPEN_WEATHER_MAP_API: process.env.OPEN_WEATHER_MAP_API,
        },
    }
]);


// module.exports = {
//     env: {
//         OPEN_WEATHER_MAP_API: process.env.OPEN_WEATHER_MAP_API,
//     },
// }

// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//     enabled: process.env.ANALYZE === 'true'
// })
//
// module.exports = withBundleAnalyzer({})
