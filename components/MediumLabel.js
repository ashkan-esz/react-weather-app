import React from 'react';
import device from './Device';
import {css} from "@emotion/core";

const MediumLabel = (props) => {
    return (
        <h3 css={style(props)}>
            {props.children}
        </h3>
    );
};

const style = ({color, weight, fontSize, align, firstToUpperCase})=> css`
  color: ${color || '#FFFFFF'};
  display: block;
  font-weight: ${ weight || '600'};
  font-size: ${fontSize || '20px'};
  text-align: ${ align || 'left'};
  padding: 5px 0;
  ${firstToUpperCase && css`
  &:first-letter {
    text-transform: uppercase;
  }
  `}
  @media ${device.tablet} {
    font-size: ${ fontSize || '23px'};
  }
  @media ${device.laptop} {
    font-size: ${ fontSize || '26px'};
  } 
  @media ${device.laptopL} {
    font-size: ${ fontSize || '29px'};
  }
`;

export default MediumLabel;
