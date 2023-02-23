// export const SEARCH_PERSONAGEM = SEARCH_PERSONAGEM;
// export const SEARCH_DADOS = SEARCH_DADOS;
// export const SEARCH_ERRO = SEARCH_ERRO;

export const searchPersonagem = () => (
   { type: 'SEARCH_PERSONAGEM' }
)

export const searchDados = (payload) => (
   { type: 'SEARCH_DADOS', payload }
)

export const searchErro = (erro) => (
   { type: 'SEARCH_ERRO', erro }
)

export function fetchThunks(name) {
    return (dispatch) => {
        dispatch(searchPersonagem());
        fetch(`https://anapioficeandfire.com/api/characters?name=${name}`)
        .then(response => response.json())
        .then(data => dispatch(searchDados(data)))
        .catch((erro) => dispatch(searchErro(erro)));
    }
}
