import React from 'react';
import DoneCard from '../components/comidas/DoneCard';
import Header from '../components/Header';

export default function DoneRecipes() {
  const [clickBtn, setClickBtn] = useState('all');
  const getRecipes = JSON.parse(localStorage.getItem('doneRecipes')); // pega item no localStorage

  const showCard = () => { // função com condição de colocar ou não a receita que foi marcada como 'checkada'
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
          alcoholicOrNot={ meal.alcoholicOrNot }
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
        alcoholicOrNot={ meal.alcoholicOrNot }
      />
    )));
  };

  return (
    <>
      <h1 data-testid="page-title">Done Recipes</h1>
      <Header />
      <section>
        <button
          type="button"
          data-testid="filter-by-all-btn" // data-testid solicitado no read-me
          onClick={ () => setClickBtn('all') } // usa o click do estado para verificar o recebimento
        >
          All
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
          data-testid="filter-by-drink-btn" // data-testid solicitado no read-me
          onClick={ () => setClickBtn('drink') } // usa o click do estado para verificar o recebimento
        >
          Drinks
        </button>
      </section>
      <ul>
        { showCard() }
        {/* renderiza o card mapeado e filtrado da função da linha 8 */}
      </ul>
    </>
  );
}
