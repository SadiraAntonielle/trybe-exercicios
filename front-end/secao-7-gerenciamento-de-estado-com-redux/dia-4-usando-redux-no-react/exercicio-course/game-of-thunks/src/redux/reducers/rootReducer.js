import { combineReducers } from 'redux';
import buscaPersonagem from './index';

const rootRedeucer = combineReducers({teste: buscaPersonagem});

export default rootRedeucer;
