import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk';
// import buscaPersonagem from './reducers/index'; // exportado do reducer
import rootRedeucer from './reducers/rootReducer';

const store = createStore(rootRedeucer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
