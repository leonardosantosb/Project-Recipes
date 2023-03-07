import React, { useContext, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import SearchBarContext from '../../context/SearchBarContext';
import requestApis from '../../services/requestApis';

// Variaveis
const number12 = 11;

export default function Recipes() {
  const { receiveApi, setReceiveApi } = useContext(SearchBarContext);
  const location = useLocation();
  const history = useHistory();
  // console.log('url aqui', location.pathname);
  useEffect(() => {
    const xablau = async () => {
      let retornoApi;
      if (location.pathname === '/meals') {
        retornoApi = await requestApis('https://www.themealdb.com/api/json/v1/1/search.php?s=');
        return setReceiveApi(retornoApi);
      }
      retornoApi = await requestApis('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
      return setReceiveApi(retornoApi);

      // console.log(retornoApi);
    };
    xablau();
  }, [setReceiveApi, location.pathname]);
  // xablau();
  // console.log('aqui', receiveApi);
  return (
    <div>
      {
        location.pathname === '/meals' && (

          <div>
            {receiveApi?.meals?.map((comidas, index) => (index <= number12 ? (
              <div data-testid={ `${index}-recipe-card` } key={ comidas.idMeal }>
                <h1 data-testid={ `${index}-card-name` }>{comidas.strMeal}</h1>
                <p>{index}</p>
                <img
                  data-testid={ `${index}-card-img` }
                  src={ comidas.strMealThumb }
                  alt={ comidas.strMeal }
                />
                <button
                  onClick={ async () => {
                    // setId(comidas.idMeal);
                    history.push(`meals/${comidas.idMeal}`);
                  } }
                >
                  Detalhes

                </button>
              </div>
            ) : null))}
          </div>
        )
      }

      {
        location.pathname === '/drinks' && (

          <div>
            {receiveApi.drinks?.map((comidas, index) => (index <= number12 ? (
              <div data-testid={ `${index}-recipe-card` } key={ comidas.idDrink }>
                <h1 data-testid={ `${index}-card-name` }>{comidas.strDrink}</h1>
                <p>{index}</p>
                <img
                  data-testid={ `${index}-card-img` }
                  src={ comidas.strDrinkThumb }
                  alt={ comidas.strDrink }
                />
                <button
                  onClick={ async () => {
                    // setId(comidas.idMeal);
                    history.push(`drinks/${comidas.idDrink}`);
                  } }
                >
                  Detalhes

                </button>
              </div>
            ) : null))}
          </div>
        )
      }

    </div>
  );
}
