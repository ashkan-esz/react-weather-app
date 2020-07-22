import React from 'react';
import device from "./Device";
import {css} from "@emotion/core";

const BigLabel = (props) => {
    return (
        <h2 css={style(props)}>
            {props.children}
        </h2>
    );
};

const style = ({color,weight,fontSize,align,firstToUpperCase})=> css`
  color: ${ color || '#FFFFFF'};
  display: block;
  font-weight: ${ weight || '600'};
  font-size: ${ fontSize || '30px'};
  text-align: ${ align || 'left'};
  padding: 5px 0;
  
  ${firstToUpperCase && css`
  &:first-letter {
    text-transform: uppercase;
  }
  `};
  @media ${device.tablet} {
    font-size: ${ fontSize || '37px'};
  }
  @media ${device.laptop} {
    font-size: ${ fontSize || '43px'};
  } 
  @media ${device.laptopL} {
    font-size: ${ fontSize || '52px'};
  } 
`;

export default BigLabel;
