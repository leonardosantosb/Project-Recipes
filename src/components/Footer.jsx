import React, { useContext, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import SearchBarContext from '../context/SearchBarContext';
import IconDrink from '../images/drinkIcon.svg';
import IconMeal from '../images/mealIcon.svg';

function Footer() {
  const { setFoodDrink } = useContext(SearchBarContext);
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/drinks') {
      return setFoodDrink('cocktail');
    }
    if (location.pathname === '/meals') {
      return setFoodDrink('meal');
    }
  }); /* aqui tinha um [], porem tava dando erro de linter */

  return (
    <footer
      data-testid="footer"
      style={ { bottom: '0px',
        position: 'fixed',
        display: 'flex',
      } }
    >
      <button
        type="button"
        data-testid="drinks-bottom-btn"
        onClick={ () => {
          setFoodDrink('cocktail');
          history.push('/drinks');
        } }
        src={ IconDrink }
        alt="DrinksIcon"
      >
        <img src={ IconDrink } alt="DrinksIcon" />
      </button>

      <button
        type="button"
        onClick={ () => {
          setFoodDrink('meal');
          history.push('/meals');
        } }
        data-testid="meals-bottom-btn"
        src={ IconMeal }
        alt="MealIcon"
      >
        <img src={ IconMeal } alt="MealIcon" />
      </button>
    </footer>
  );
}

export default Footer;
