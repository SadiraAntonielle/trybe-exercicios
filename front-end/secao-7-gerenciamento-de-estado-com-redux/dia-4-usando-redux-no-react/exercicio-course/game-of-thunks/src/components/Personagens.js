import React from 'react';
import { connect } from 'react-redux';

class Personagens extends React.Component {
    render() {
        const { personagem, /* loading, erro */ } = this.props;
        return (
            <div>
                {personagem && (
                <div>
                <ul>
                    <li>Name: {personagem.name}</li>
                    <li>Gender: {personagem.gender}</li>
                    <li>Born: {personagem.born}</li>
                    <li>PlayedBy: {personagem.playedBy}</li>
                </ul>
                Titles:
                <ol>
                    {personagem.titles.map((title) =>(
                        <li key={title}>{title}</li>
                    ))}
                </ol>
                Aliases:
                <ol>
                    {personagem.aliases.map((alias) => (
                        <li key={alias}>{alias}</li>
                    ))}
                </ol>
                </div>
                )}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    personagem: state.teste.personagem,
    // loading: state.teste.loading,
    // error: state.teste.erro, 
})

export default connect(mapStateToProps)(Personagens);
