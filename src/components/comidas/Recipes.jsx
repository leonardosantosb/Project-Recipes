import React, { useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SearchBarContext from '../../context/SearchBarContext';
import requestApis from '../../services/requestApis';

// Variaveis
const number12 = 11;
const categoryLimit = 5;

export default function Recipes() {
  const { receiveApi, setReceiveApi } = useContext(SearchBarContext);
  const [categories, setCategories] = useState([]); // estado para as categorias
  const [categoryFilter, setCategoryFilter] = useState([]); // estado para as categorias após o filtro
  const [currentFilter, setCurrentFilter] = useState([]); // estado somente para armazenar o filtro atual e ajudar com o botão de reset
  const location = useLocation();
  // console.log('url aqui', location.pathname);
  useEffect(() => {
    const fetchApi = async () => { // só troquei o nome xablau pra fetchapi
      let retornoApi;
      if (location.pathname === '/meals') {
        retornoApi = await requestApis('https://www.themealdb.com/api/json/v1/1/search.php?s=');
        return setReceiveApi(retornoApi);
      }
      retornoApi = await requestApis('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
      return setReceiveApi(retornoApi);

      // console.log(retornoApi);
    };
    const fetchCategory = async () => {
      let retornoApi;
      if (location.pathname === '/meals') {
        retornoApi = await requestApis('https://www.themealdb.com/api/json/v1/1/list.php?c=list'); // fetch nas categorias
        retornoApi = retornoApi.meals.slice(0, categoryLimit); // ja retorna filtrado
        return setCategories(retornoApi); // alocando no estado categories
      }
      retornoApi = await requestApis('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'); // mesmo processo acima, porém para drinks
      retornoApi = retornoApi.drinks.slice(0, categoryLimit);
      return setCategories(retornoApi);
    };
    fetchApi();
    fetchCategory();
  }, [setReceiveApi, location.pathname]);
  // xablau();
  // console.log('aqui', receiveApi);

  const handleCategoryMeal = (category) => { // retorna as 12 primeiras comidas após o filtro
    setCurrentFilter(category); // armazenando o filtro atual
    let retornoApi;
    const fetchApiMeal = async () => {
      if (category === 'All' || category === currentFilter) { // lógica para resetar ao apertar no botão all ou apertar novamente no mesmo filtro
        retornoApi = await requestApis('https://www.themealdb.com/api/json/v1/1/search.php?s='); // link comidas iniciais
        retornoApi = retornoApi.meals.slice(0, number12);
        return setCategoryFilter(retornoApi); // retorno já filtrado das comidas iniciais
      }
      const limit = 12;
      retornoApi = await requestApis(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`); // link comidas filtradas
      retornoApi = retornoApi.meals.slice(0, limit);
      return setCategoryFilter(retornoApi); // retorno já filtrado das comidas filtradas
    };
    fetchApiMeal();
  };

  const handleCategoryDrink = (category) => { // exatamente a mesma lógica acima, só que pros drinks
    setCurrentFilter(category);
    let retornoApi;
    const fetchApiDrink = async () => {
      if (category === 'All' || category === currentFilter) {
        retornoApi = await requestApis('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
        retornoApi = retornoApi.drinks.slice(0, number12);
        return setCategoryFilter(retornoApi);
      }
      const limit = 12;
      retornoApi = await requestApis(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`);
      retornoApi = retornoApi.drinks.slice(0, limit);
      return setCategoryFilter(retornoApi);
    };
    fetchApiDrink();
  };

  return (
    <div>
      {
        location.pathname === '/meals' && (

          <div>
            {/* {Lógica dos botões de categoria das comidas} */}
            {categories.map((category, index) => (
              <button
                key={ index }
                value={ category.strCategory }
                data-testid={ `${category.strCategory}-category-filter` }
                onClick={ () => handleCategoryMeal(category.strCategory) }
              >
                {category.strCategory}
              </button>
            ))}
            <div>
              <button
                data-testid="All-category-filter"
                value="All"
                onClick={ () => handleCategoryMeal('All') }
              >
                All
              </button>
            </div>
            {categoryFilter.map((filter, index) => (
              <div key={ index }>
                <h1 data-testid={ `${index}-card-name` }>
                  {filter.strMeal}
                </h1>
                <img
                  data-testid={ `${index}-card-img` }
                  src={ filter.strMealThumb }
                  alt={ filter.strMeal }
                />
              </div>
            ))}
            {receiveApi?.meals?.map((comidas, index) => (index <= number12 ? (
              <div data-testid={ `${index}-recipe-card` } key={ comidas.idMeal }>
                <h1 data-testid={ `${index}-card-name` }>{comidas.strMeal}</h1>
                <p>{index}</p>
                {/* tag para ao clicar no card redirecionar pra /meal/id */}
                <a href={ `/meals/${comidas.idMeal}` }>
                  <img
                    data-testid={ `${index}-card-img` }
                    src={ comidas.strMealThumb }
                    alt={ comidas.strMeal }
                  />
                </a>
              </div>
            ) : null))}
          </div>
        )
      }

      {
        location.pathname === '/drinks' && (

          <div>
            {/* {Lógica dos botões de categoria das bebidas} */}
            {categories.map((category, index) => (
              <button
                key={ index }
                value={ category.strCategory }
                data-testid={ `${category.strCategory}-category-filter` }
                onClick={ () => handleCategoryDrink(category.strCategory) }
              >
                {category.strCategory}
              </button>
            ))}
            <div>
              <button
                data-testid="All-category-filter"
                value="All"
                onClick={ () => handleCategoryDrink('All') }
              >
                All
              </button>
            </div>
            {categoryFilter.map((filter, index) => (
              <div key={ index }>
                <h1 data-testid={ `${index}-card-name` }>
                  {filter.strDrink}
                </h1>
                <img
                  data-testid={ `${index}-card-img` }
                  src={ filter.strDrinkThumb }
                  alt={ filter.strDrink }
                />
              </div>
            ))}
            {receiveApi.drinks?.map((comidas, index) => (index <= number12 ? (
              <div data-testid={ `${index}-recipe-card` } key={ comidas.idDrink }>
                <h1 data-testid={ `${index}-card-name` }>{comidas.strDrink}</h1>
                <p>{index}</p>
                {/* tag para ao clicar no card redirecionar pra /drink/id */}
                <a href={ `/drinks/${comidas.idDrink}` }>
                  <img
                    data-testid={ `${index}-card-img` }
                    src={ comidas.strDrinkThumb }
                    alt={ comidas.strDrink }
                  />
                </a>
              </div>
            ) : null))}
          </div>
        )
      }

    </div>
  );
}
