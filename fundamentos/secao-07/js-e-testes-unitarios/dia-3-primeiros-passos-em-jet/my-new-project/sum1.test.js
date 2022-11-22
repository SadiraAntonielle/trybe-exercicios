/* A função sum(a, b) retorna a soma do parâmetro a com o b
Teste se o retorno de sum(4, 5) é 9

Teste se o retorno de sum(0, 0) é 0

Teste se a função sum lança um erro quando os parâmetros são 4 e "5"(string 5)

Teste se a mensagem de erro é “parameters must be numbers” quando realizar a chamada sum(4, "5") */

const sum = require('./sum1');

describe('Requisito 1', () => {
  test('A soma de 4 mais 5 é igual a 9', () => {
    expect(sum(4, 5)).toEqual(9);
  });
});

describe('Requisito 2', () => {
  test('A soma de 0 mais 0 é igual a 0', () => {
    expect(sum(0, 0)).toEqual(0);
  });
});

describe('Requisito 3', () => {
  test('Retorna um erro se passar uma string', () => {
    expect(() => sum(4, "5")).toThrowError();
  });
})

describe('Requisito 4', () => {
  test('Retorna uma mensagem de erro quando for uma string', () => {
    expect(() => sum(4, "5")).toThrowError('parameters must be numbers');
  });
})
