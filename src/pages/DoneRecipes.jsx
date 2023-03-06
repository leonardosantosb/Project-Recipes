import React from 'react';
import Header from '../components/Header';

export default function DoneRecipes() {
  return (
    <>
      <h1 data-testid="page-title">Done Recipes</h1>
      <Header />
      <section>
        <button
          type="button"
          data-testid="filter-by-all-btn" // data-testid solicitado no read-me
          onClick={}
        >
          All
        </button>
        <button
          type="button"
          data-testid="filter-by-meal-btn" // data-testid solicitado no read-me
          onClick={}
        >
          Meals
        </button>
        <button
          type="button"
          data-testid="filter-by-drink-btn" // data-testid solicitado no read-me
          onClick={}
        >
          Drinks
        </button>
      </section>
    </>
  );
}
