import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import pokeReducer from './pokemonDucks.js';
import userReducer, {readUserActiveAction} from './userDucks';
import "core-js/stable";
import "regenerator-runtime/runtime";

const rootReducer = combineReducers({
  pokemons: pokeReducer,
  users: userReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore(){
  const store = createStore( rootReducer, composeEnhancers( applyMiddleware(thunk) ));
  readUserActiveAction()(store.dispatch);
  return store
};

