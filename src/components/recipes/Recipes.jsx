import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import SearchBarContext from '../../context/SearchBarContext';

// Variaveis
const number12 = 11;

export default function Recipes() {
  const { receiveApi } = useContext(SearchBarContext);
  const location = useLocation();
  console.log('url aqui', location.pathname);
  return (
    <div>
      {
        location.pathname === '/meals' && (

          <div>
            {receiveApi.meals?.map((comidas, index) => (index <= number12 ? (
              <div data-testid={ `${index}-recipe-card` } key={ comidas.idMeal }>
                <h1 data-testid={ `${index}-card-name` }>{comidas.strMeal}</h1>
                <p>{index}</p>
                <img
                  data-testid={ `${index}-card-img` }
                  src={ comidas.strMealThumb }
                  alt={ comidas.strMeal }
                />
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
              </div>
            ) : null))}
          </div>
        )
      }

    </div>
  );
}
