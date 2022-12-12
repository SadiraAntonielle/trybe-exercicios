/* Crie um novo projeto utilizando npx create-react-app my-form-1.0.

Crie um formulário que contenha os seguintes elementos: um campo select, dois inputs de tipo diferente e uma textarea . Feito isso, faça com que um desses elementos seja um componente controlado, ou seja, elemento do formulário controlado pelo Estado.

Baixe a React Developer Tools e nela veja o dado, inserido no elemento controlado, sendo salvo no Estado. */

import React from 'react';

class Form extends React.Component {
    constructor() {
        super();
    
        this.state = {
          email: '',
        };
    
        this.handleChange = this.handleChange.bind(this);
      }
    
      handleChange(event) {
        this.setState({
          email: event.target.value,
        });
      }
    
      render() {
        const { email } = this.state;
    return (
      <div>
        <h1>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</h1>
        <form className="form">

          <label htmlFor="name">
            Nome:
            <input
              id="name"
              name="name"
              type="text"
            />
          </label>

          <label htmlFor="email">
            Email:
            <input
              id="email"
              name="email"
              type="email"
            />
          </label>

          <label htmlFor="age">
            Idade:
            <select
              id="age"
              name="age"
              defaultValue=""
            >
              <option value="">Selecione</option>
              <option value="adult">Maior que 18</option>
              <option value="underage">Menor que 18</option>
            </select>
          </label>

          <label htmlFor="anecdote">
            Anedota:
            <textarea id="anecdote" name="anecdote" />
          </label>

        </form>
      </div>
    );
  }
}

export default Form;
