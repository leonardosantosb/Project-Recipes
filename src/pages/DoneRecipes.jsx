import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import shareIcon from '../images/shareIcon.svg';

export default function DoneRecipes() {
  const [copyLink, setCopyLink] = useState();
  const [done, setDone] = useState([]);
  const [clickBtn, setClickBtn] = useState('all');

  const getRecipes = (key, value) => { // pega item no localStorage
    const doneMeals = localStorage.getItem(key) ? JSON
      .parse(localStorage.getItem(key)) : value;
    return doneMeals;
  };

  useEffect(() => { // coloca o item no estado
    const getDone = getRecipes('done', []);
    setDone(getDone);
  }, []);

  /*   const showCard = () => { // função com condição de colocar ou não a receita que foi marcada como 'checkada'
    if (getRecipes === null || getRecipes.length < 1) { // se igua a null ou menor que 1 retorna mensagem
      return <span>Termine alguma receita</span>;
    }
    if (clickBtn === 'all') { // faz o map para pegar o card da receita
      return (getRecipes.map((meal, index) => (
        <DoneCard
          key={ meal.id } // requisito 45 - verifica se o card possui os atributos de uma comida
          name={ meal.name }
          id={ meal.id }
          type={ meal.type }
          image={ meal.image }
          category={ meal.category }
          doneDate={ meal.doneDate }
          tags={ meal.tags }
          index={ index }
          nationality={ meal.nationality }
          alcoholicOrNot={ meal.alcoholicOrNotAlc }
        />
      )));
    }
    return (getRecipes.filter((meal) => meal.type === clickBtn).map((meal, index) => ( // faz um filter para mostrar o card da receita que foi realizada
      <DoneCard
        key={ meal.id } // requisito 45 - verifica se o card possui os atributos de uma comida
        name={ meal.name }
        id={ meal.id }
        type={ meal.type }
        image={ meal.image }
        category={ meal.category }
        doneDate={ meal.doneDate }
        tags={ meal.tags }
        index={ index }
        nationality={ meal.nationality }
        alcoholicOrNot={ meal.alcoholicOrNotAlc }
      />
    )));
  }; */

  return (
    <>
      <h1 data-testid="page-title">Done Recipes</h1>
      <Header />
      <section>
        <button
          type="button"
          data-testid="filter-by-drink-btn" // data-testid solicitado no read-me
          onClick={ () => setClickBtn('drink') }
        >
          Drinks
        </button>
        <button
          type="button"
          data-testid="filter-by-meal-btn" // data-testid solicitado no read-me
          onClick={ () => setClickBtn('meal') } // usa o click do estado para verificar o recebimento
        >
          Meals
        </button>
        <button
          type="button"
          data-testid="filter-by-all-btn" // data-testid solicitado no read-me
          onClick={ () => setClickBtn('all') } // usa o click do estado para verificar o recebimento
        >
          All
        </button>
      </section>
      <div>
        {done.filter((value) => {
          switch (clickBtn) {
          case 'meals':
            return value.type === 'meal';
          case 'drinks':
            return value.type === 'drink';
          default:
            return value;
          }
        }).map((recipe, index) => (
          <div key={ recipe.id }>
            <Link
              to={ `/${recipe.type}s/${recipe.id}` }
            >
              <img
                data-testid={ `${index}-horizontal-image` } // data-testid solicitado no read-me
                src={ recipe.image }
                alt={ recipe.id }
              />
            </Link>
            <Link
              to={ `/${recipe.type}s/${recipe.id}` }
              data-testid={ `${index}-horizontal-name` } // data-testid solicitado no read-me
            >
              { recipe.name }
            </Link>
            {
              recipe.type === 'meal' ? (
                <p
                  data-testid={ `${index}-horizontal-top-text` } // data-testid solicitado no read-me / requisito 45 e 46
                >
                  {`${recipe.nationality} - ${recipe.category}`}
                </p>)
                : (
                  <p
                    data-testid={ `${index}-horizontal-top-text` } // data-testid solicitado no read-me
                  >
                    {recipe.alcoholicOrNot}
                  </p>)
            }
            <p
              data-testid={ `${index}-horizontal-done-date` } // data-testid solicitado no read-me
            >
              { `Feito em: ${recipe.doneDate} ` }
            </p>
            { copyLink && <small>Link copied!</small> }
            <div>
              { recipe.tags.map((value) => (
                <span
                  data-testid={ `${index}-${value}-horizontal-tag` } // data-testid solicitado no read-me
                  key={ value }
                >
                  {value}
                </span>
              ))}
            </div>
            <button
              type="button"
              onClick={ () => {
                navigator.clipboard.writeText(`${window.location.origin}/${type}s/${id}`);
                setCopyLink(true);
              } }
            >
              <img
                data-testid={ `${index}-horizontal-share-btn` } // data-testid solicitado no read-me
                src={ shareIcon }
                alt="Share Icon"
              />
            </button>
          </div>
        ))}
      </div>
    </>

  );
}
