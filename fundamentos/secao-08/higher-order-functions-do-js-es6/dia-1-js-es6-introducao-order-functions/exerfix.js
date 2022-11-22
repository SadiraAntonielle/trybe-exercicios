/* Crie uma função que retorne a string 'Acordando!!';

Crie outra função que retorne a string 'Bora tomar café!!';

Crie mais uma função que retorne a string 'Partiu dormir!!';

Agora desenvolva uma HOF chamada doingThings e configure esta função para que imprima no console o resultado da execução das funções que você criou nos exemplos anteriores. Exemplo: */

// Ao chamar a função doingThings:

const acordar = () => 'Acordando!!';

const cafe = () => 'Bora tomar café!!';

const dormir = () => 'Partiu dormir!!';

const doingThings = (callback) => { // hof é uma função que recebe outra função como parametro e callback é chamar a função que recebe o parametro
    return callback()
}

console.log(doingThings(cafe));

// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!