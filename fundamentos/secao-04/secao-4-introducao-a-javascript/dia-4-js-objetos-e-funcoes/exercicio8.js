/* Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

Array de teste: [2, 3, 2, 5, 8, 2, 3];.

Valor esperado no retorno da função: 2. */

function qualMaisSeRepete(array) {
    // const arrayOrdenado = array.sort();
    let numeroFinal = 0;
    let repeticoeFinal = 0;
    
    for (let index = 0; index < array.length; index += 1) {
    const numero = array[index];
    let repeticoes = 0;
    
    for (let index2 = 0; index2 < array.length; index2 += 1) {
    if (array[index2] === numero) {
    repeticoes = repeticoes + 1;
    }
    };
    
    if (repeticoes > repeticoeFinal) {
    numeroFinal = numero;
    repeticoeFinal = repeticoes;
    }
    };
    
    return numeroFinal;
    };
    
    console.log(qualMaisSeRepete([2, 3, 2, 5, 8, 2, 3])) 