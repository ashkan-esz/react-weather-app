import React from 'react';
import {css} from "@emotion/core";
import PropTypes from 'prop-types';
import SmallLabel from './SmallLabel';
import Text from './Text';
import device from './Device';

const ForecastHour = (props) => {
    const {temp, month, day, hour, icon} = props;
    const iconUrl = `https://openweathermap.org/img/w/${icon}.png`;
    return (
        <div css={style}>
            <Text align="center">
                {month}.{day}
            </Text>
            <Text align="center">{hour}:00</Text>
            <img className={'weather-icon'} src={iconUrl} alt={'weather-icon'}/>
            <SmallLabel align="center" weight="400">
                {temp}&#176;
            </SmallLabel>
        </div>
    );
};


const style = css`
  flex-shrink: 0;
  flex-basis: 90px;
  padding: 10px;
  margin: 0 5px;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.2);
  &:first-of-type {
    margin-left: 0;
  }
  &:last-of-type {
    margin-right: 0;
  }
  @media ${device.tablet} {
    flex-basis: 110px;
  }
  @media ${device.laptop} {
    flex-basis: 125px;
  }
  @media ${device.laptopL} {
    flex-basis: 140px;
  }
.weather-icon{
  display: block;
  height: 50px;
  width: 50px;
  margin: 0 auto;
}
`;

ForecastHour.propTypes = {
    temp: PropTypes.number.isRequired,
    month: PropTypes.string.isRequired,
    day: PropTypes.string.isRequired,
    hour: PropTypes.number.isRequired,
    icon: PropTypes.string.isRequired,
};

export default ForecastHour;
