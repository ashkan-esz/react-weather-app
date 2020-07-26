import React from 'react';
import PropTypes from 'prop-types';
import {css} from "@emotion/core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import device from './Device';
import AlgoliaPlaces from 'algolia-places-react';

const SearchCity = ({showResult, change, submit}) => {
    return (
        <form css={style(showResult)} onSubmit={submit}>

            <AlgoliaPlaces
                className={'search-input'}
                placeholder='Enter city'
                onChange={({query}) => change(query)}
                onClear={() => change('')}
                options={{
                    appId: process.env.ALGOLIA_PLACES_APP_ID,
                    apiKey: process.env.ALGOLIA_PLACES_API_KEY,
                    language: 'en',
                    type: 'city',
                }}
            />

            <div className={'search-icon'}>
                <FontAwesomeIcon icon={faSearch}/>
            </div>

        </form>
    );
};


const style = (showResult) => css`

  top: ${showResult ? '0' : '28vh'};
  position: relative;
  margin: 0 auto;
  max-width: 500px;
  transition: 0.8s 0.5s;
  @media ${device.laptopL} {
    max-width: 600px;
  }
  @media ${device.desktop} {
    max-width: 700px;
  }

.search-input{
  width: 100%;
  height: 6vh;
  padding: 10px 15px 10px 40px;
  font-size: 16px;
  background-color: #ffffff;
  color: #c5c5c5;
  transition: 0.2s;
  border-radius: 20px;
  border: none;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  &:focus {
    color: #191919;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    outline: none;
  }
  @media ${device.tablet} {
    font-size: 18px;
  }
  @media ${device.laptop} {
    padding: 15px 20px 15px 45px;
    border-radius: 30px;
  }
}

.search-icon{
  display: block;
  position: absolute;
  top: 50%;
  left: 22px;
  transform: translate(-50%, -50%);
  height: 14px;
  width: 14px;
  font-size: 14px;
  color: #c5c5c5;
  @media ${device.tablet} {
    height: 15px;
    width: 15px;
    font-size: 15px;
  }
  @media ${device.laptop} {
    height: 16px;
    width: 16px;
    font-size: 16px;
  }
}
`;

SearchCity.propTypes = {
    showResult: PropTypes.bool.isRequired,
    change: PropTypes.func.isRequired,
    submit: PropTypes.func.isRequired,
};

export default SearchCity;
