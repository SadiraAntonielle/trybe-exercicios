import React from 'react';

// Crie uma aplicação React com npx create-react-app fancy-buttons, que atenda ao seguinte critérios: O componente App.jsdeve ser alterado para que seja um componente de classe e contenha um botão associado a um evento que imprime um texto qualquer via console.log().

/* function clickBotaoOn() {
  console.log('Clique no botão 1');
}

function clickBotaoTwo() {
  console.log('Clique no botão 2');
}

function clickBotaoThree() {
  console.log('Clique no botão 3');
}

class App extends React.Component {
  render() {
    return (
      <div>
          <button onClick={ clickBotaoOn }>Botão 1</button>
          <button onClick={ clickBotaoTwo }>Botão 2</button>
          <button onClick={ clickBotaoThree }>Botão 3</button>
      </div>
    );  
  }
} */

// Utilizando o mesmo código do exercício anterior, declare dentro da classe <App> as funções que, anteriormente, foram declaradas fora da classe.Faça com que as funções criadas no exercício anterior possuam acesso ao objeto this.

class App extends React.Component {
  clickBotaoOn() {
    console.log('Clique no botão 1');
  }
  
  clickBotaoTwo() {
    console.log('Clique no botão 2');
  }
  
  clickBotaoThree() {
    console.log('Clique no botão 3');
  }
  
  render() {
    return (
      <div>
          <button onClick={ this.clickBotaoOn }>Botão 1</button>
          <button onClick={ this.clickBotaoTwo }>Botão 2</button>
          <button onClick={ this.clickBotaoThree }>Botão 3</button>
      </div>
    );  
  }
}

export default App;
