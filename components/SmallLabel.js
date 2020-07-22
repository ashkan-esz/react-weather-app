import React from 'react';
import {css} from "@emotion/core";
import device from "./Device";

const SmallLabel = (props) => {
    return (
        <h4 css={style(props)}>
            {props.children}
        </h4>
    );
};

const style = ({color, weight, fontSize, align, firstToUpperCase})=> css`
  color: ${color || '#FFFFFF'};
  display: block;
  font-weight: ${ weight || '600'};
  font-size: ${fontSize || '15px'};
  text-align: ${ align || 'left'};
  padding: 0;
  
  ${firstToUpperCase && css`
  &:first-letter {
    text-transform: uppercase;
  }
  `};
  @media ${device.tablet} {
    font-size: ${ fontSize || '20px'};
  }
  @media ${device.laptop} {
    font-size: ${fontSize || '23px'};
  } 
  @media ${device.laptopL} {
    font-size: ${fontSize || '26px'};
  }
`;

export default SmallLabel;
