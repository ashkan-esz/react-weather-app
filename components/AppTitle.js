import React from 'react';
import {css} from "@emotion/core";
import device from "./Device";
const AppTitle = (props) => {
    return (
        <h1 css={AppTitleStyle(props)}>
            {props.children}
        </h1>
    );
};

const AppTitleStyle = ({showLabel, secondary,hide}) => css`
  display: block;
  height: 64px;
  margin: 0;
  padding: 18px 5px;
  position: relative;
  font-size: 20px;
  text-transform: uppercase;
  font-weight: 400;
  color: #ffffff;
  transition: 0.3s 1.4s;
  opacity: ${showLabel ? 1 : 0} ;

    ${secondary && css`  
      opacity: 1;
      height: auto;
      padding: 20px 0;
      top: 19vh;
      text-align: center;
      transition: .5s;
      //font-size: 60px;//todo : need change
      
    @media ${device.tablet} {
      font-size: 40px;
    }
    @media ${device.laptop} {
      font-size: 50px;
    }
    @media ${device.laptopL} {
      font-size: 60px;
    }
    @media ${device.desktop} {
      font-size: 70px;
    }
    `}

    ${hide && css`
      opacity: 0;
      visibility: hidden;
      top: 10vh;
    `}

`;

export default AppTitle;


