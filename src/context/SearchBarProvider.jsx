import React from 'react';

export default function SearchBarProvider({ children }) {
  return (
    <SearchBarProvider>
      { children }
    </SearchBarProvider>
  );
}

SearchBarProvider.propTypes = {
  children: PropTypes.func,
}.isRequired;
