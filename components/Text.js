import React from 'react';
import {css} from "@emotion/core";
import device from "./Device";

const Text = (props) => {
    return (
        <span css={style(props)}>
            {props.children}
        </span>
    );
};

const style = ({color, fontSize, align, firstToUpperCase})=> css`
  color: ${color || '#FFFFFF'};
  display: block;
  font-size: ${fontSize || '12px'};
  text-align: ${ align || 'left'};
  //padding: 5px 0;
  ${firstToUpperCase && css`
  &:first-letter {
    text-transform: uppercase;
  }
  `};
  @media ${device.tablet} {
    font-size: ${ fontSize || '15px'};
  }
  @media ${device.laptop} {
    font-size: ${fontSize || '17px'};
  } 
  @media ${device.laptopL} {
    font-size: ${fontSize || '19px'};
  }
`;

export default Text;
