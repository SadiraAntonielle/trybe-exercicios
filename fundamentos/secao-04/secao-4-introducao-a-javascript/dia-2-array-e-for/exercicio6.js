/* Utilizando for, descubra qual o menor valor contido no array e imprima-o; */

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let menorNumero = numbers[0];

for ( let indice = 0; indice < numbers.length; indice += 1) {
    if (numbers[indice] < menorNumero) {
        menorNumero = numbers[indice];
    }
}

console.log(menorNumero);