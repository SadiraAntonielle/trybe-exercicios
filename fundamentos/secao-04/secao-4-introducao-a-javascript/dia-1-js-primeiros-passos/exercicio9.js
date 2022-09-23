/* Utilize if/else para fazer um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele deve retornar false.
Bonus: use somente um if. */


let a = 10;
let b = 12;
let c = 22;

let opcoes = 'false';

if (a % 2 !== 0 || b % 2 !== 0 || c % 2 !==0) {
    opcoes = true;
}
console.log(opcoes);