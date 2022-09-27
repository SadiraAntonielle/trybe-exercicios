/* Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

Exemplo de palíndromo: arara

verificaPalindrome('arara')

Retorno esperado: true
verificaPalindrome('desenvolvimento') */

function palindromo(string) {
    const palavraReversa = string.split('').reverse().join('');

    if (string === palavraReversa) {
        return true;
    } else {
        return false;
    }
}

console.log(palindromo('arara'));
console.log(palindromo('desenvolvimento'));
