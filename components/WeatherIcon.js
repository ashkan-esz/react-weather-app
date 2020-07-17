import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faBolt,
    faCloud,
    faCloudRain,
    faCloudShowersHeavy,
    faSmog,
    faSnowflake,
    faSun
} from "@fortawesome/free-solid-svg-icons";
import device from "./Device";
import {css} from '@emotion/core';

const WeatherIcon = ({main}) => {
    let Icon ;

    if (main === 'Thunderstorm') {
        Icon = <FontAwesomeIcon icon={faBolt} />;
    } else if (main === 'Drizzle') {
        Icon = <FontAwesomeIcon icon={faCloudRain} />;
    } else if (main === 'Rain') {
        Icon = <FontAwesomeIcon icon={faCloudShowersHeavy} />;
    } else if (main === 'Snow') {
        Icon = <FontAwesomeIcon icon={faSnowflake} />;
    } else if (main === 'Clear') {
        Icon = <FontAwesomeIcon icon={faSun} />;
    } else if (main === 'Clouds') {
        Icon = <FontAwesomeIcon icon={faCloud} />;
    } else {
        Icon = <FontAwesomeIcon icon={faSmog} />;
    }
    return (
        <div css={style}>
            {Icon}
        </div>
    );
};

const style = css`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 70px;
  color: #ffffff;
  @media ${device.tablet} {
    font-size: 100px;
    justify-content: flex-end;
  }
  @media ${device.laptop} {
    font-size: 120px;
  }
  @media ${device.laptopL} {
    font-size: 140px;
  }
`;

export default WeatherIcon;
