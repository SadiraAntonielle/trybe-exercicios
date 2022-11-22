/* Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”; */

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let valorImpare = 0;

for ( let indice = 0; indice < numbers.length; indice += 1) {
    if (numbers[indice] % 2 !== 0) {
    valorImpare += 1;
}
}

console.log(valorImpare);