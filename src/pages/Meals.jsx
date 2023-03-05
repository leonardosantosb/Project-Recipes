import React from 'react';
// import { useHistory } from 'react-router-dom';
// import Details from '../components/details/Details';
import Footer from '../components/Footer';
import Header from '../components/Header';
// import SearchBarContext from '../context/SearchBarContext';

export default function Meals() {
  // const { receiveApi } = useContext(SearchBarContext);
  // const history = useHistory();
  // console.log(receiveApi);
  // const re = receiveApi && receiveApi.meals && receiveApi.meals[0].idMeal;
  // console.log(re);

  return (
    <section>
      {/* {
        receiveApi.length === 1
          ? (history.push(`/meals/${re}`))
          : ( */}
      <div>
        <h1 data-testid="page-title">Meals</h1>
        <Header />
      </div>
      {/* )
      } */}
      <Footer />

    </section>
  );
}
