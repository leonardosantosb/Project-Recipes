import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import SearchBarContext from './SearchBarContext';

export default function SearchBarProvider({ children }) {
  const [foodDrink, setFoodDrink] = useState('meal');

  const context = useMemo(
    () => ({
      foodDrink,
      setFoodDrink,
    }),
    [
      foodDrink,
      setFoodDrink,
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
