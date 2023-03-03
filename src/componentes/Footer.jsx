import React from 'react';
// import { useHistory } from 'react-router-dom';
import IconDrink from '../images/drinkIcon.svg';
import IconMeal from '../images/mealIcon.svg';

function footer() {
  // const history = useHistory();

  // const handleClick = ({ target }) => {
  //  history.push('/');
  // };

  return (
    <footer
      data-testid="footer"
      style={ { bottom: '0px',
        position: 'fixed',
        display: 'flex',
      } }
    >
      <img
        src={ IconDrink }
        alt="DrinksIcon"
        data-testid="drinks-bottom-btn"
      />

      <img
        src={ IconMeal }
        data-testid="meals-bottom-btn"
        alt="MealIcon"
      />
    </footer>
  );
}

export default footer;
