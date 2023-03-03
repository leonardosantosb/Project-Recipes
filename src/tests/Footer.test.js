import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('Teste do Menu inferior', () => {
  test('Verificar se duas imagens', () => {
    render(<App />, ['/profile']);
    expect(screen.getByRole({}))
  });
});
