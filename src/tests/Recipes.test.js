import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import SearchBarProvider from '../context/SearchBarProvider';
import { renderWithRouter } from './RenderWithRouter';

const filterMeal = 'Beef-category-filter';
const filterDrink = 'Ordinary Drink-category-filter';
const firstCard = '0-card-name';

describe('testando a renderização dos filtros de busca', () => {
  test('testando a renderização dos filtros de busca de /meals ', async () => {
    renderWithRouter(
      <SearchBarProvider>
        <App />
      </SearchBarProvider>,
      { initialEntries: ['/meals'] },
    );
    await waitFor(() => {
      const firstFilter = screen.getByTestId(filterMeal);
      expect(firstFilter).toBeInTheDocument();
    });
  });
  test('testando a renderização dos filtros de busca de /drinks ', async () => {
    renderWithRouter(
      <SearchBarProvider>
        <App />
      </SearchBarProvider>,
      { initialEntries: ['/drinks'] },
    );
    await waitFor(() => {
      const firstFilter = screen.getByTestId(filterDrink);
      expect(firstFilter).toBeInTheDocument();
    });
  });
  test('testando a renderização das imagens padrão de /meals ', async () => {
    renderWithRouter(
      <SearchBarProvider>
        <App />
      </SearchBarProvider>,
      { initialEntries: ['/meals'] },
    );
    await waitFor(() => {
      const firstImage = screen.getByTestId(firstCard);
      expect(firstImage).toBeInTheDocument();
    });
  });
  test('testando a renderização das imagens padrão de /drinks ', async () => {
    renderWithRouter(
      <SearchBarProvider>
        <App />
      </SearchBarProvider>,
      { initialEntries: ['/drinks'] },
    );
    await waitFor(() => {
      const firstImage = screen.getByTestId(firstCard);
      expect(firstImage).toBeInTheDocument();
    });
  });
  test('testando se ao clicar no botão Beef, renderiza corretamente ', async () => {
    renderWithRouter(
      <SearchBarProvider>
        <App />
      </SearchBarProvider>,
      { initialEntries: ['/meals'] },
    );
    await waitFor(() => {
      const filterButton = screen.getByTestId(filterMeal);
      userEvent.click(filterButton);
      const firstImage = screen.getByRole('img', { name: /beef and mustard pie/i });
      expect(firstImage).toBeInTheDocument();
    });
  });
  test('testando se ao clicar no botão Ordinary Drink, renderiza corretamente ', async () => {
    renderWithRouter(
      <SearchBarProvider>
        <App />
      </SearchBarProvider>,
      { initialEntries: ['/drinks'] },
    );
    await waitFor(() => {
      const filterButton = screen.getByTestId(filterDrink);
      userEvent.click(filterButton);
      const firstImage = screen.getByRole('img', { name: /3-mile long island iced tea/i });
      expect(firstImage).toBeInTheDocument();
    });
  });
  test('testando se ao clicar no botão All, retorna para a renderização inicial em /meals ', async () => {
    renderWithRouter(
      <SearchBarProvider>
        <App />
      </SearchBarProvider>,
      { initialEntries: ['/meals'] },
    );
    await waitFor(() => {
      const filterButton = screen.getByTestId(filterMeal);
      userEvent.click(filterButton);
      const firstImage = screen.getByTestId(firstCard);
      expect(firstImage).toBeInTheDocument();
      const resetButton = screen.getByTestId('All-category-filter');
      userEvent.click(resetButton);
      const resetImage = screen.getByTestId(firstCard);
      expect(resetImage).toBeInTheDocument();
    });
  });
  test('testando se ao clicar no botão All, retorna para a renderização inicial em /drinks ', async () => {
    renderWithRouter(
      <SearchBarProvider>
        <App />
      </SearchBarProvider>,
      { initialEntries: ['/drinks'] },
    );
    await waitFor(() => {
      const filterButton = screen.getByTestId(filterDrink);
      userEvent.click(filterButton);
      const firstImage = screen.getByTestId(firstCard);
      expect(firstImage).toBeInTheDocument();
      const resetButton = screen.getByTestId('All-category-filter');
      userEvent.click(resetButton);
      const resetImage = screen.getByTestId(firstCard);
      expect(resetImage).toBeInTheDocument();
    });
  });
});
