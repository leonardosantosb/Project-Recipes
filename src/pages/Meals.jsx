import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function Meals() {
  return (
    <section>
      <div>
        <h1 data-testid="page-title">Meals</h1>
        <Header />
      </div>
      <Footer />

    </section>
  );
}
