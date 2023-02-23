import React from 'react';
import { connect } from 'react-redux';
import Personagens from './components/Personagens';
import { fetchThunks } from './redux/actions'; // exportado da action

class App extends React.Component {
  state = {
    personagem: '',
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  render() {
    const { personagem } = this.state;
    const { dispatch } = this.props
    return (
      <div>
        <input 
          type="text"
          name="personagem"
          onChange={ this.handleChange }
          value={ personagem }
        />
        <button
          type="button"
          onClick={ () => dispatch(fetchThunks(personagem)) }
        >
          Search
        </button>
        <Personagens />
      </div>   
    )
  }
}

export default connect()(App);
