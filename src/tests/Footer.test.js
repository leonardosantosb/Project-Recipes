import React from 'react';
import { render, screen } from '@testing-library/react';
import Profile from '../pages/Profile';

describe('Teste do Menu inferior', () => {
  test('Verifica a quantidade de imagens e o data-testeId', () => {
    render(<Profile />);
    const url = screen.getAllByRole('img');
    expect(url).toHaveLength(2);
    expect(screen.getByTestId('drinks-bottom-btn')).toBeInTheDocument();
    expect(screen.getByTestId('meals-bottom-btn')).toBeInTheDocument();
  });
});
