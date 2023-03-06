import React from 'react';
import Recipes from '../components/comidas/Recipes';
import Footer from '../components/Footer';
import Header from '../components/Header';
// import SearchBarContext from '../context/SearchBarContext';

// Variaveis
// const number12 = 12;

export default function Drinks() {
  // const { receiveApi } = useContext(SearchBarContext);
  // const [drinksData, setDrinksData] = useState([]);

  // useEffect(() => {
  //   setDrinksData(...receiveApi.slice(0, number12));
  // }, [setDrinksData, receiveApi]);

  return (
    <section>
      <h1 data-testid="page-title">Drinks</h1>
      <Header />
      {/* <div>
        {receiveApi.drinks.map((comidas, index) => (index <= 11 ? (
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
      </div> */}
      <Recipes />
      <Footer />
    </section>
  );
}
