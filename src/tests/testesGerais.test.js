import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import { renderWithRouter } from './RenderWithRouter';

// const mockfetch = () => {
//   jest.spyOn(global, 'fetch').mockImplementation(() => Promise.resolve({
//     status: 200,
//     ok: true,
//     json: () => Promise.resolve(drinks),
//   }));
// };

describe('requisito numero 1', () => {
  // beforeEach(mockfetch);
  // afterEach(cleanup);

  // test('teste o remove all ', async () => {
  //   const { history } = renderWithRouter(<App />);
  //   const email = screen.getByPlaceholderText('Email');
  //   userEvent.type(email, 'teste@teste.com');
  //   const senha = screen.getByPlaceholderText('Password');
  //   userEvent.type(senha, '1231234');
  //   const buttonEnter = screen.getByRole('button', { name: /enter/i });
  //   userEvent.click(buttonEnter);
  //   const buttonDrinks = screen.getByAltText('DrinksIcon');
  //   userEvent.click(buttonDrinks);
  //   const { pathname } = history.location;
  //   expect(pathname).toBe('/drinks');
  // });
  test('teste o remove all ', () => {
    const { history } = renderWithRouter(<App />);
    const email = screen.getByPlaceholderText('Email');
    userEvent.type(email, 'teste@teste.com');
    const senha = screen.getByPlaceholderText('Password');
    userEvent.type(senha, '1231234');
    const buttonEnter = screen.getByRole('button', { name: /enter/i });
    userEvent.click(buttonEnter);
    const buttonMeals = screen.getByTestId('meals-bottom-btn');
    userEvent.click(buttonMeals);
    const { pathname } = history.location;
    expect(pathname).toBe('/meals');
  });
  test('testa botao para voltar pro perfil ', () => {
    const { history } = renderWithRouter(<App />);
    const email = screen.getByPlaceholderText('Email');
    userEvent.type(email, 'teste@teste.com');
    const senha = screen.getByPlaceholderText('Password');
    userEvent.type(senha, '1231234');
    const buttonEnter = screen.getByRole('button', { name: /enter/i });
    userEvent.click(buttonEnter);
    const buttonProfile = screen.getByTestId('profile-top-btn');
    userEvent.click(buttonProfile);
    const { pathname } = history.location;
    expect(pathname).toBe('/profile');
  });
});
