/* A função myFizzBuzz(num) recebe um número num e retorna "fizzbuzz" se o número for divisível por 3 e 5, retorna "fizz" se for divisível apenas por 3, retorna "buzz" se divisível apenas por 5, retorna o próprio número caso não seja divisível por 3 ou 5 e retorna false caso num não seja um número
Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado

Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado

Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado

Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado

Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado */



const myFizzBuzz = require('./sum3');

  describe('Requisito 1', () => {
    test('Verifica se numero é divisível por 3 e 5', () => {
      expect(myFizzBuzz(15)).toBe('fizzbuzz');
    });
  });

  describe('Requisito 2', () => {
    test('Verifica se numero é divisível por 3', () => {
      expect(myFizzBuzz(6)).toBe('fizz');
    });
  });

  describe('Requisito 3', () => {
    test('Verifica se numero é divisível por 5', () => {
      expect(myFizzBuzz(25)).toBe('buzz');
    });
  });

  describe('Requisito 4', () => {
    test('Verifica se numero não é um número', () => {
      expect(myFizzBuzz('chocolate')).toBe(false);
    });
  });

  describe('Requisito 5', () => {
    test('Verifica se numero não é divisível por 3 e 5', () => {
      expect(myFizzBuzz(7)).not.toBe('fizzbuzz');
    });
  });