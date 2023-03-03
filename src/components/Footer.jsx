import React from 'react';
// import { useHistory } from 'react-router-dom';
import IconDrink from '../images/drinkIcon.svg';
import IconMeal from '../images/mealIcon.svg';

function footer() {
  return (
    <footer
      data-testid="footer"
      style={ { bottom: '0px',
        position: 'fixed',
        display: 'flex',
      } }
    >
      <a href="/drinks">
        <img
          src={ IconDrink }
          alt="DrinksIcon"
          data-testid="drinks-bottom-btn"
        />
      </a>

      <a href="/meals">
        <img
          src={ IconMeal }
          data-testid="meals-bottom-btn"
          alt="MealIcon"
        />
      </a>
    </footer>
  );
}

export default footer;
