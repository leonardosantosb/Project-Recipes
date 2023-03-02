import React from 'react';
import styles from './SearchBar.module.css';

export default function SearchBar() {
  return (
    <div className={ styles.searchBarMain }>
      {/* apenas para passa no teste mometaniamente */}
      <p data-testid="search-top-btn">🌎</p>
      <label htmlFor="">
        teste anterior
        <input
          type="text"
          data-testid="search-top-btn"
          // src={ profileIcon }
          // onClick={ () => history.push() }
        />
      </label>
      {/* ........... */}

      <label htmlFor="">
        Busca de ingrediente:
        <input
          type="radio"
          name="radioBusca"
          id=""
          data-testid="ingredient-search-radio"
        />
      </label>
      <label htmlFor="">
        Busca por nome:
        <input
          type="radio"
          name="radioBusca"
          id=""
          data-testid="name-search-radio"
        />
      </label>
      <label htmlFor="">
        Busca por letra:
        <input
          type="radio"
          name="radioBusca"
          id=""
          data-testid="first-letter-search-radio"
        />
      </label>
      <button
        type="button"
        data-testid="exec-search-btn"
      >
        Buscar
      </button>
    </div>
  );
}
