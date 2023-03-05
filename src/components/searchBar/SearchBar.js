import React, { useContext, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import styles from './SearchBar.module.css';
import requestApis from '../../services/requestApis';
import SearchBarContext from '../../context/SearchBarContext';
// import Drinks from '../../pages/Drinks';
// import { FILTER_BY_MAIN_INGREDIENT,
//   LIST_ALL_MEALS_BY_1_LETTER,
//   SEARCH_MEAL_BY_NAME } from '../../services/endpoints';

const firstLetter = 'first-letter';
export default function SearchBar() {
  const [inputRadio, setInputRadio] = useState('');
  const { foodDrink, setInputSearchText,
    inputSearchText, setReceiveApi } = useContext(SearchBarContext);
  const history = useHistory();
  const location = useLocation();

  const handleOptions = () => {
    if (inputRadio === 'ingredient') {
      // console.log(`ingredient ${FILTER_BY_MAIN_INGREDIENT}${inputSearchText}`);
      return `https://www.the${foodDrink}db.com/api/json/v1/1/filter.php?i=${inputSearchText}`;
    }

    if (inputRadio === firstLetter) {
      // console.log(`first-lettess ${LIST_ALL_MEALS_BY_1_LETTER}${inputSearchText}`);
      return `https://www.the${foodDrink}db.com/api/json/v1/1/search.php?f=${inputSearchText}`;
    }

    if (inputRadio === 'name') {
      console.log(`https://www.the${foodDrink}db.com/api/json/v1/1/search.php?s=${inputSearchText}`);
      return `https://www.the${foodDrink}db.com/api/json/v1/1/search.php?s=${inputSearchText}`;
    }
  };

  // console.log(foodDrink);

  const handleChange = ({ target: { value, type } }) => {
    console.log(type);
    if (type === 'radio') {
      console.log(value);
      setInputRadio(value);
    }
    if (type === 'text') {
      console.log(value);
      setInputSearchText(value);
    }
  };

  const handleSearch = async () => {
    if (inputSearchText.length > 1 && inputRadio === firstLetter) {
      return global.alert('Your search must have only 1 (one) character');
    }

    // console.log(url);
    const result = await requestApis(handleOptions());
    setReceiveApi(result);
    // console.log('aqui', result.meals.length);
    // console.log('sdubooooooooo', location.pathname);
    // console.log('testando ele', `${location.pathname}/${result.meals[0].idMeal}`);

    if (location.pathname === '/meals') {
      return result.meals.length === 1 && (history
        .push(`${location.pathname}/${result.meals[0].idMeal}`));
    }
    // console.log('s77777777777oo', location.pathname);
    if (location.pathname === '/drinks') {
      console.log('xablau');
      return result.drinks.length === 1 && (history
        .push(`${location.pathname}/${result.drinks[0].idDrink}`));
      // return history.push(url);
    }

    // result.history.push(`/${location.pathname}/${result.(meals[0].idMeal
  };

  // useEffect(() => {
  //   console.log(location.pathname);
  // }, []);

  // console.log(receiveApi);
  // console.log(inputRadio);
  // console.log(inputSearchText);

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
    </div>
  );
}
