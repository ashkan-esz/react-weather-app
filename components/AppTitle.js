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

const AppTitleStyle = ({show, title,hide}) => css`
  display: block;
  position: relative;
  height: 64px;
  margin: 0;
  padding: 18px 5px;
  text-transform: uppercase;
  font-size: 20px;
  font-weight: 400;
  color: #ffffff;
  transition: 0.3s 1.4s;
  opacity: ${ (show || title) ? 1 : 0} ;
  visibility: ${hide ? 'hidden' : 'visible'};
  
    ${title && css`  
      height: auto;
      padding: 20px 0;
      top: 19vh;
      text-align: center;
      transition: .5s;
      
    @media ${device.mobileS} {
      font-size: 27px;
    }
    @media ${device.mobileM} {
      font-size: 34px;
    }
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

`;

export default AppTitle;