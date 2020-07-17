import React from 'react';
import {css, keyframes} from '@emotion/core';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFrown} from "@fortawesome/free-solid-svg-icons";

const NotFound = () => {
    return (
        <div css={style}>
            <span className={'not-found-icon'}>
                <FontAwesomeIcon icon={faFrown} />
            </span>
            <span className={'not-found-text'}>Sorry, the specified city was not found..</span>
        </div>
    );
};


const fade_in_animation = keyframes`
  to {
        opacity: 1;
        visibility: visible;
        top: 0;
  }
`;

const style = css`
  height: 12vh;
  max-width: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 100px auto 0;
  padding: 20px;
  opacity: 0;
  visibility: hidden;
  position: relative;
  border-radius: 10px;
  top: 20px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  animation: ${fade_in_animation} 0.5s 1.4s forwards;

  .not-found-icon{
    display: block;
  text-align: center;
  color: #ffffff;
  font-size: 40px;
  margin-right: 10px;
  }
  
  .not-found-text{
    color: #ffffff;
  font-size: 17px;
  }
`;

export default NotFound;
