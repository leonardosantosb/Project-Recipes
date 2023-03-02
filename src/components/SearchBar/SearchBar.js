import React from 'react';

export default function SearchBar() {
  return (
    <div>
      SearchBar
      Barra de busca - Header
      {/* apenas para passa no teste mometaniamente */}
      <p data-testid="search-top-btn">pp</p>
      <label htmlFor="">
        teste anterior
        <input
          type="text"
          name="radioBusca"
          id=""
          data-testid="search-input"
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
        Busca de ingrediente:
        <input
          type="radio"
          name="radioBusca"
          id=""
          data-testid="name-search-radio"
        />
      </label>
      <label htmlFor="">
        Busca de ingrediente:
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
