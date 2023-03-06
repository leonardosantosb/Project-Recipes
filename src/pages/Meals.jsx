import React from 'react';
import Recipes from '../components/comidas/Recipes';
// import { useHistory } from 'react-router-dom';
// import Details from '../components/details/Details';
import Footer from '../components/Footer';
import Header from '../components/Header';
// import SearchBarContext from '../context/SearchBarContext';

// Variaveis
// const number12 = 12;

export default function Meals() {
  return (
    <section>
      <h1 data-testid="page-title">Meals</h1>
      <Header />
      <Recipes />
      <Footer />

    </section>
  );
}
