import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import SearchBarContext from './SearchBarContext';

export default function SearchBarProvider({ children }) {
  const [foodDrink, setFoodDrink] = useState('meal');
  const [inputSearchText, setInputSearchText] = useState('');
  const [receiveApi, setReceiveApi] = useState([]);

  // salavando o id dos detalhes das comisa/bebidas
  const [id, setId] = useState('');

  const context = useMemo(
    () => ({
      foodDrink,
      inputSearchText,
      receiveApi,
      id,
      setReceiveApi,
      setFoodDrink,
      setInputSearchText,
      setId,
    }),
    [
      foodDrink,
      inputSearchText,
      receiveApi,
      id,

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
