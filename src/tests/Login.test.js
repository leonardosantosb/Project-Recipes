import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import renderWithRouter from './RenderWithRouter';

describe('testes da tela de login', () => {
  test('testando tela de login ', () => {
    renderWithRouter(<App />);
    const emailTest = screen.getByPlaceholderText('Email');
    expect(emailTest).toBeInTheDocument();
    userEvent.type(emailTest, 'teste@teste.com');
    const passwordTest = screen.getByPlaceholderText('Password');
    expect(passwordTest).toBeInTheDocument();
    userEvent.type(passwordTest, 'leo1234');
    const button = screen.getByRole('button', { name: /Enter/i });
    userEvent.click(button);
    const user = JSON.parse(localStorage.getItem('user'));
    expect(user).toEqual({ email: 'teste@teste.com' });
  });
});
