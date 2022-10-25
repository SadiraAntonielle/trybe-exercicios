/* Para as funções encode e decode, crie os seguintes testes em Jest:
Teste se encode e decode são funções;
Para a função encode, teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente;
Para a função decode, teste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u, respectivamente;
Teste se as demais letras/números não são convertidos para cada caso;
Teste se a string que é retornada pelas funções tem o mesmo número de caracteres que a string passada como parâmetro. */

const { encode, decode } = require('./sum4');

  describe('Requisito 1', () => {
    test('Verifica se encode e decode são funções', () => {
      expect(typeof encode && typeof decode).toEqual('function');
    });
  });

  describe('Requisito 2', () => {
    test('Para a função encode, teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente', () => {
      expect(encode('sadira')).toEqual('s1d3r1');
    });
  });

  describe('Requisito 3', () => {
    test('Para a função decode, teste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u, respectivamente', () => {
      expect(decode('f2l3p2')).toEqual('felipe');
    });
  });

  describe('Requisito 4', () => {
    test('Teste se as demais letras/números não são convertidos para cada caso', () => {
      expect(encode('aeiouaeiou')).toEqual('1234512345');
      expect(decode('1234512345')).toEqual('aeiouaeiou');
    });
  });

  describe('Requisito 5', () => {
    test('Teste se a string que é retornada pelas funções tem o mesmo número de caracteres que a string passada como parâmetro', () => {
      expect(encode('aeiouaeiou')).toEqual('1234512345');
      expect(decode('1234512345')).toEqual('aeiouaeiou');
    });
  });