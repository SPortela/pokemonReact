import { combineReducers } from "redux";
import PokemonReducer from './pokemonReducer';

const reducers = combineReducers({
  pokemonRedux: PokemonReducer,
});

const rootReducer = (state, action) => {
  return reducers(state, action);
};

export default rootReducer;
