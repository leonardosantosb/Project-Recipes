import React, { useState } from 'react';
import styles from './SearchBar.module.css';
import requestApis from '../../services/requestApis';
import { FILTER_BY_MAIN_INGREDIENT,
  LIST_ALL_MEALS_BY_1_LETTER,
  SEARCH_MEAL_BY_NAME } from '../../services/endpoints';

const firstLetter = 'first-letter';
export default function SearchBar() {
  const [inputSearchText, setInputSearchText] = useState('');
  // const [url, setUrl] = useState('');
  // const [letraUm, setLetraUm] = useState('');
  const [receiveApi, setReceiveApi] = useState([]);
  const [inputRadio, setInputRadio] = useState('');

  const handleOptions = () => {
    if (inputRadio === 'ingredient') {
      // console.log(`ingredient ${FILTER_BY_MAIN_INGREDIENT}${inputSearchText}`);
      return `${FILTER_BY_MAIN_INGREDIENT}${inputSearchText}`;
    }

    if (inputRadio === firstLetter) {
      // console.log(`first-lettess ${LIST_ALL_MEALS_BY_1_LETTER}${inputSearchText}`);
      // setLetraUm(inputRadio);
      return `${LIST_ALL_MEALS_BY_1_LETTER}${inputSearchText}`;
    }

    if (inputRadio === 'name') {
      // console.log(`name ${SEARCH_MEAL_BY_NAME}${inputSearchText}`);
      return `${SEARCH_MEAL_BY_NAME}${inputSearchText}`;
    }
  };

  const handleChange = ({ target: { value, type } }) => {
    console.log(type);
    if (type === 'radio') {
      console.log(value);
      setInputRadio(value);
      // handleOptions(value);
    }
    if (type === 'text') {
      console.log(value);
      // handleOptions(value);
      setInputSearchText(value);
    }
  };

  const handleSearch = async () => {
    if (inputSearchText.length > 1 && inputRadio === firstLetter) {
      // setLetraUm('');
      global.alert('Your search must have only 1 (one) character');
    } else {
      // console.log(url);
      setReceiveApi(await requestApis(handleOptions()));
    }
  };

  console.log(receiveApi);
  console.log(inputRadio);
  console.log(inputSearchText);

  return (
    <div className={ styles.searchBarMain }>
      {/* apenas para passa no teste mometaniamente */}
      <label htmlFor="">
        teste anterior
        <input
          type="text"
          name={ inputSearchText }
          data-testid="search-input"
          value={ inputSearchText }
          onChange={ handleChange }
        />
      </label>

      <label htmlFor="">
        Busca de ingrediente:
        <input
          type="radio"
          name="radioBusca"
          id=""
          value="ingredient"
          data-testid="ingredient-search-radio"
          onChange={ handleChange }
        />
      </label>
      <label htmlFor="">
        Busca por nome:
        <input
          type="radio"
          name="radioBusca"
          id=""
          value="name"
          data-testid="name-search-radio"
          onChange={ handleChange }
        />
      </label>
      <label htmlFor="">
        Busca por letra:
        <input
          type="radio"
          name="radioBusca"
          id=""
          value="first-letter"
          data-testid="first-letter-search-radio"
          onChange={ handleChange }
        />
      </label>
      <button
        type="button"
        data-testid="exec-search-btn"
        onClick={ handleSearch }
      >
        Buscar
      </button>
      {/* {
        receiveApi?.map((e) => (
          <p key={ e.id }>{e}</p>
        ))
      } */}
    </div>
  );
}
