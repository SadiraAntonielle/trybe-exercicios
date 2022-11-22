/* Faça uma função chamada fruitSalad passando como parâmetro specialFruit e additionalItens; faça a função retornar uma lista única, contendo todos os itens da nossa salada de frutas, usando o spread.
 */
/* 
// Faça uma lista com as suas frutas favoritas
const specialFruit = ['', '', ''];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['', '', ''];

const fruitSalad = (fruit, additional) => {
  // Escreva sua função aqui
};

console.log(fruitSalad(specialFruit, additionalItens)); */

// Faça uma lista com as suas frutas favoritas
const specialFruit = ['melancia', 'mamao', 'pitaia'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['leite em pó', 'nutela', 'aveia'];

const fruitSalad = (fruit, additional) => {
  return [...fruit, 'doce de leite', ...additional]
};

console.log(fruitSalad(specialFruit, additionalItens));