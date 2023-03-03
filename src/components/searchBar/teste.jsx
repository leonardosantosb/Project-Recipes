import React, { useEffect, useState } from 'react';
import styles from './SearchBar.module.css';
import requestApis from '../../services/requestApis';
import { FILTER_BY_MAIN_INGREDIENT,
  LIST_ALL_MEALS_BY_1_LETTER,
  SEARCH_MEAL_BY_NAME } from '../../services/endpoints';

const firstLetter = 'first-letter';
export default function SearchBar() {
  const [inputSearchText, setInputSearchText] = useState('');
  const [url, setUrl] = useState('');
  const [letraUm, setLetraUm] = useState('');
  const [receiveApi, setReceiveApi] = useState([]);

  const handleOptions = (param) => {
    if (param === 'ingredient') {
      console.log(`ingredient ${FILTER_BY_MAIN_INGREDIENT}${inputSearchText}`);
      return setUrl(`${FILTER_BY_MAIN_INGREDIENT}${inputSearchText}`);
    }

    if (param === firstLetter) {
      setLetraUm(param);
      console.log(`first-lettess ${LIST_ALL_MEALS_BY_1_LETTER}${inputSearchText}`);
      return setUrl(`${LIST_ALL_MEALS_BY_1_LETTER}${inputSearchText}`);
    }

    if (param === 'name') {
      console.log(`name ${SEARCH_MEAL_BY_NAME}${inputSearchText}`);
      return setUrl(`${SEARCH_MEAL_BY_NAME}${inputSearchText}`);
    }
  };

  const handleChange = ({ target: { value, type } }) => {
    console.log(type);
    if (type === 'text') {
      setInputSearchText(value);
      console.log(value);
      handleOptions(value);
    }
    if (type === 'radio') {
      console.log(value);
      handleOptions(value);
      handleOptions(value);
    }
  };

  const handleSearch = async () => {
    if (inputSearchText.length > 1 && letraUm === firstLetter) {
      setLetraUm('');
      global.alert('Your search must have only 1 (one) character');
    } else {
      console.log(url);
      setReceiveApi(await requestApis(url));
    }
  };

  useEffect(() => {
    handleSearch();
  }, []);

  console.log(receiveApi);

  return (
    <div className={ styles.searchBarMain }>
      {/* apenas para passa no teste mometaniamente */}
      <label htmlFor="">
        teste anterior
        <input
          type="text"
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
