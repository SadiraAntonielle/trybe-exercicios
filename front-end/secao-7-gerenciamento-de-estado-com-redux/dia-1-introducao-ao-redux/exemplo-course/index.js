import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

// criando reducer com estado inicial
const INITIAL_STATE = { count: 0 };

const reducer = (state = INITIAL_STATE, action) => {

    if (action.type === "INCREMENT_COUNTER") {
        return { count: state.count + 1 }
    }
    return state;
}

// criando a store ja com o redex dev tools
const store = createStore(reducer, composeWithDevTools());
 
// criando a action
const action = { type: "INCREMENT_COUNTER" }

// disparando a action
const incrementeButton = document.querySelector("button");
incrementeButton.addEventListener("click", () => {
    store.dispatch(action);
})

// lendo as alterações do estado
store.subscribe(() => {

    const globalState = store.getState();
    // console.log(globalState);
    const counterElement = document.querySelector("h2");
    counterElement.innerHTML = globalState.count;
    // console.log('estado alterado');
})