import React from 'react';
import { screen } from '@testing-library/react';

import App from '../App';
import { renderWithRouter } from './RenderWithRouter';
import userEvent from '@testing-library/user-event';

describe('Teste do Menu inferior', () => {
  test('Verifica a quantidade de imagens e o data-testeId', () => {
    renderWithRouter(<App />);
    const email = screen.getByPlaceholderText('Email');
    userEvent.type(email, 'teste@teste.com');
    const senha = screen.getByPlaceholderText('Password');
    userEvent.type(senha, '1231234');
    const buttonEnter = screen.getByRole('button', { name: /enter/i });
    userEvent.click(buttonEnter);
    const url = screen.getAllByRole('img');
    expect(url).toHaveLength(2);
    expect(screen.getByTestId('drinks-bottom-btn')).toBeInTheDocument();
    expect(screen.getByTestId('meals-bottom-btn')).toBeInTheDocument();
  });
});
