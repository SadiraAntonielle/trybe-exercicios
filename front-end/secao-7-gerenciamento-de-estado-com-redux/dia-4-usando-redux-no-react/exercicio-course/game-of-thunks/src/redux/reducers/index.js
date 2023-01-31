const INITIAL_STATE = {
    personagem: '',
    loading: false,
};

const buscaPersonagem = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'SEARCH_PERSONAGEM':
            return {
            ...state,
            loading: true,
        }
        case 'SEARCH_DADOS':
            return {
                ...state,
                loading: false,
                personagem: action.payload[0],
            }
        case 'SEARCH_ERRO':
            return {
                ...state,
                loading: false,
                error: action.erro,
            }
        default:
            return state;
    }
}

export default buscaPersonagem;
