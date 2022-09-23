/* Utilize switch/case para fazer um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.

Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).

Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.

Exemplo: bishop (bispo) -> diagonals (diagonais) */

let xadrez = 'rei';

switch (xadrez) {
    case 'rei':
        console.log('Rei: Pode ser movimentado em qualquer direção do tabuleiro, mas apenas de casa em casa.');
        break;
    case 'rainha':
        console.log('Rainha: Sem restrições, a Rainha tem livre movimentação no jogo na horizontal, vertical e diagonais.');
        break;
    case 'torre':
        console.log('Torre: pode correr sem restrição de número de casas e em todas as direções (frente, trás, direita, esquerda).');
        break;
    case 'bispo':
        console.log('Bispo: Sem restrição de número de casas, mas somente no sentido diagonal.');
        break;
    case 'cavalo':
        console.log('Cavalo: Realiza movimentos em “L”, ou seja, duas casas em um sentido e uma casa em sentido perpendicular àquele, em qualquer direção.');
        break;
    case 'peao':
        console.log('Peão: Pode apenas realizar movimentos frontais, de forma que o primeiro movimento de cada peão abranja até duas casas, e os demais se limitam a uma casa à frente. ');
        break;
    default:
    console.log('Peça invalida');
}