import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import SearchBarContext from './SearchBarContext';

export default function SearchBarProvider({ children }) {
  const [foodDrink, setFoodDrink] = useState('meal');
  const [inputSearchText, setInputSearchText] = useState('');
  const [receiveApi, setReceiveApi] = useState([]);

  const context = useMemo(
    () => ({
      foodDrink,
      inputSearchText,
      receiveApi,
      setReceiveApi,
      setFoodDrink,
      setInputSearchText,
    }),
    [
      foodDrink,
      inputSearchText,
      receiveApi,
    ],
  );

  return (
    <SearchBarContext.Provider value={ context }>
      { children }
    </SearchBarContext.Provider>
  );
}

SearchBarProvider.propTypes = {
  children: PropTypes.func,
}.isRequired;
