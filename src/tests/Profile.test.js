import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import SearchBarProvider from '../context/SearchBarProvider';
import { LoginProvider } from '../context/LoginProvider';
import { renderWithRouter } from './RenderWithRouter';

describe('testando a renderização da tela de perfil', () => {
  test('testando a renderização geral da página ', async () => {
    renderWithRouter(
      <LoginProvider>
        <SearchBarProvider>
          <App />
        </SearchBarProvider>
      </LoginProvider>,
      { initialEntries: ['/profile'] },
    );
    const title = screen.getByRole('heading', { name: /profile/i });
    const iconHeader = screen.getByRole('button', { name: /human silhouette/i });
    const email = screen.getByTestId('profile-email');
    const doneRecipesBtn = screen.getByRole('button', { name: /done recipes/i });
    const favoriteRecipesBtn = screen.getByRole('button', { name: /favorite recipes/i });
    const logoutBtn = screen.getByRole('button', { name: /logout/i });
    const iconFooterDrink = screen.getByRole('img', { name: /drinksicon/i });
    const iconFooterMeal = screen.getByRole('button', { name: /mealicon/i });
    expect(title).toBeInTheDocument();
    expect(iconHeader).toBeInTheDocument();
    expect(email).toBeInTheDocument();
    expect(doneRecipesBtn).toBeInTheDocument();
    expect(favoriteRecipesBtn).toBeInTheDocument();
    expect(logoutBtn).toBeInTheDocument();
    expect(iconFooterDrink).toBeInTheDocument();
    expect(iconFooterMeal).toBeInTheDocument();
  });
  test('testa o funcionamento do botão done recipes', async () => {
    renderWithRouter(
      <LoginProvider>
        <SearchBarProvider>
          <App />
        </SearchBarProvider>
      </LoginProvider>,
      { initialEntries: ['/profile'] },
    );
    const doneRecipesBtn = screen.getByRole('button', { name: /done recipes/i });
    userEvent.click(doneRecipesBtn);
    const doneRecipesTitle = screen.getByRole('heading', { name: /done recipes/i });
    expect(doneRecipesTitle).toBeInTheDocument();
  });
  test('testa o funcionamento do botão favorite recipes', async () => {
    renderWithRouter(
      <LoginProvider>
        <SearchBarProvider>
          <App />
        </SearchBarProvider>
      </LoginProvider>,
      { initialEntries: ['/profile'] },
    );
    const favoriteRecipesBtn = screen.getByRole('button', { name: /favorite recipes/i });
    userEvent.click(favoriteRecipesBtn);
    const favoriteRecipesTitle = screen.getByRole('heading', { name: /favorite recipes/i });
    expect(favoriteRecipesTitle).toBeInTheDocument();
  });
  test('testa o funcionamento do botão favorite recipes', async () => {
    renderWithRouter(
      <LoginProvider>
        <SearchBarProvider>
          <App />
        </SearchBarProvider>
      </LoginProvider>,
      { initialEntries: ['/profile'] },
    );
    const logoutBtn = screen.getByRole('button', { name: /logout/i });
    userEvent.click(logoutBtn);
    const loginTitle = screen.getByRole('heading', { name: /login/i });
    expect(loginTitle).toBeInTheDocument();
  });
});
