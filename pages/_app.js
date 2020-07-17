import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/global.css';
require('typeface-montserrat');

export default function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
}