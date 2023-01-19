import React from 'react';
import { render, screen } from '@testing-library/react';
import ValidEmail from './ValidEmail';

test('Testando um componente, caso o email seja válido.', () => {
  const EMAIL_USER = 'email@email.com';
  render(<ValidEmail email={ EMAIL_USER } />);
  const isValid = screen.getByText('Email Válido');
  expect(isValid).toBeInTheDocument();
});

test('Testando um componente, caso o email seja inválido.', () => {
    const EMAIL_USER = 'emailerrado';
    render(<ValidEmail email={ EMAIL_USER } />);
    const isValid = screen.getByText('Email Inválido');
    expect(isValid).toBeInTheDocument();
  });
  
test('Testando se o componente nao aparece caso o campo e-mail esteja vazio.', () => {
    render(<ValidEmail email="" />)
    const validaTexto = screen.queryByTestId('id-is-email-valid');
    expect(validaTexto).not.toBeInTheDocument();
});

test('Testando se o componente possui texto verde ao email ser valido', () => {
    const emailUsado = 'teste@teste.com';

    render(<ValidEmail email={ emailUsado } />);
    const emailDigitado = screen.getByTestId('id-is-email-valid');
    expect(emailDigitado).toHaveAttribute('class', 'green-text');
})

test('Testando se o componente possui texto vermelho ao ser digitado um e-mail inválido.', () => {
    const emailUsado = 'emailerrado';
  
    render(<ValidEmail email={emailUsado} />);
    const emailDigitado = screen.getByTestId('id-is-email-valid');
    expect(emailDigitado).toHaveAttribute('class', 'red-text');
  });