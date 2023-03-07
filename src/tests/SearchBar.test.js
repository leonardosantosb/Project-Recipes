import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import SearchBarProvider from '../context/SearchBarProvider';
import { renderWithRouter } from './RenderWithRouter';

describe('testes da tela de SearchBar', () => {
  const msg = 'Sorry, we haven\'t found any recipes for these filters.';
  const searchTopBtn = 'search-top-btn';
  const nameSearchRadio = 'name-search-radio';
  const searchInput = 'search-input';
  const execSearchBtn = 'exec-search-btn';

  test('testando tela de SearchBar ', async () => {
    renderWithRouter(
      <SearchBarProvider>
        <App />
      </SearchBarProvider>,
      { initialEntries: ['/meals'] },
    );

    jest.spyOn(global, 'alert').mockReturnValue('Your search must have only 1 (one) character');

    const pesquisaTest = screen.getByTestId(searchTopBtn);
    expect(pesquisaTest).toBeInTheDocument();
    userEvent.click(pesquisaTest);

    // radios buttons
    const radioIngredient = await screen.findByTestId('ingredient-search-radio');
    const radioName = await screen.findByTestId(nameSearchRadio);
    const radioLetra = await screen.findByTestId('first-letter-search-radio');
    const search = screen.getByTestId(searchInput);
    const buscar = screen.getByTestId(execSearchBtn);

    userEvent.click(radioIngredient);
    userEvent.type(search, 'onion');

    userEvent.click(buscar);

    userEvent.click(radioName);
    userEvent.type(search, 'onion');

    userEvent.click(buscar);

    userEvent.click(radioLetra);
    userEvent.type(search, 'a');

    userEvent.click(buscar);

    userEvent.click(radioLetra);
    userEvent.type(search, 'aa');

    userEvent.click(buscar);

    // expect(global.alert).toHaveBeenCalled();
    await waitFor(() => {
      expect(global.alert).toHaveBeenCalled();
    });

    userEvent.click(radioName);
    userEvent.type(search, 'xablau');

    userEvent.click(buscar);
  });

  test('teste 1 ', async () => {
    renderWithRouter(
      <SearchBarProvider>
        <App />
      </SearchBarProvider>,
      { initialEntries: ['/meals'] },
    );

    jest.spyOn(global, 'alert').mockReturnValue(msg);

    const pesquisaTest = screen.getByTestId(searchTopBtn);
    expect(pesquisaTest).toBeInTheDocument();
    userEvent.click(pesquisaTest);

    // radios buttons
    const radioName = await screen.findByTestId(nameSearchRadio);
    // const radioLetra = await screen.findByTestId('first-letter-search-radio');
    const search = screen.getByTestId(searchInput);
    const buscar = screen.getByTestId(execSearchBtn);

    // userEvent.click(radioLetra);
    // userEvent.type(search, 'aa');

    // userEvent.click(buscar);

    userEvent.click(radioName);
    userEvent.type(search, 'Arrabiata');

    userEvent.click(buscar);
    await waitFor(() => {
      expect(global.alert).toHaveBeenCalled();
    });
  });

  test('teste 2', async () => {
    renderWithRouter(
      <SearchBarProvider>
        <App />
      </SearchBarProvider>,
      { initialEntries: ['/drinks'] },
    );

    jest.spyOn(global, 'alert').mockReturnValue(msg);

    const pesquisaTest = screen.getByTestId(searchTopBtn);
    expect(pesquisaTest).toBeInTheDocument();
    userEvent.click(pesquisaTest);

    // radios buttons
    // const radioName = await screen.findByTestId(nameSearchRadio);
    const radioLetra = await screen.findByTestId('first-letter-search-radio');
    const search = screen.getByTestId(searchInput);
    const buscar = screen.getByTestId(execSearchBtn);

    userEvent.click(radioLetra);
    userEvent.type(search, 'a');

    userEvent.click(buscar);

    // userEvent.click(radioName);
    // userEvent.type(search, 'A1');

    // userEvent.click(buscar);
    // await waitFor(() => {
    //   expect(global.alert).toHaveBeenCalled(1);
    // });
  });

  test('teste 3', async () => {
    renderWithRouter(
      <SearchBarProvider>
        <App />
      </SearchBarProvider>,
      { initialEntries: ['/drinks'] },
    );

    jest.spyOn(global, 'alert').mockReturnValue(msg);

    const pesquisaTest = screen.getByTestId(searchTopBtn);
    expect(pesquisaTest).toBeInTheDocument();
    userEvent.click(pesquisaTest);

    // radios buttons
    const radioName = await screen.findByTestId(nameSearchRadio);
    // const radioLetra = await screen.findByTestId('first-letter-search-radio');
    const search = screen.getByTestId(searchInput);
    const buscar = screen.getByTestId(execSearchBtn);

    userEvent.click(radioName);
    userEvent.type(search, 'A1');

    userEvent.click(buscar);
    await waitFor(() => {
      // expect(global.alert).toHaveBeenCalled();
    });

    // const profile = screen.getByTestId('profile-top-btn');
    // userEvent.click(profile);
  });

  test('teste 4', async () => {
    renderWithRouter(
      <SearchBarProvider>
        <App />
      </SearchBarProvider>,
      { initialEntries: ['/drinks'] },
    );

    // jest.spyOn(global, 'alert').mockReturnValue(msg);

    await waitFor(() => {
      expect(global.alert).toHaveBeenCalled();
    });
    // expect(history.location.phaname).toBe('/17222');

    const profile = screen.getByTestId('profile-top-btn');
    userEvent.click(profile);
  });
  test('teste 5', async () => {
    const { history } = renderWithRouter(<App />);
    const email = screen.getByPlaceholderText('Email');
    userEvent.type(email, 'teste@teste.com');
    const senha = screen.getByPlaceholderText('Password');
    userEvent.type(senha, '1231234');
    const buttonEnter = screen.getByRole('button', { name: /enter/i });
    userEvent.click(buttonEnter);
    const buttonDrinks = screen.getByAltText('DrinksIcon');
    userEvent.click(buttonDrinks);
    const { pathname } = history.location;
    expect(pathname).toBe('/drinks');
    await waitFor(() => {
      const firstImg = screen.getByTestId('0-recipe-card');
      expect(firstImg).toBeInTheDocument();
    });
  });
  // test('teste 6', async () => {
  //   const { history } = renderWithRouter(<App />);
  //   const email = screen.getByPlaceholderText('Email');
  //   userEvent.type(email, 'teste@teste.com');
  //   const senha = screen.getByPlaceholderText('Password');
  //   userEvent.type(senha, '1231234');
  //   const buttonEnter = screen.getByRole('button', { name: /enter/i });
  //   userEvent.click(buttonEnter);
  //   const buttonMeals = screen.getByTestId('meals-bottom-btn');
  //   userEvent.click(buttonMeals);
  //   const { pathname } = history.location;
  //   expect(pathname).toBe('/meals');
  // });
});
