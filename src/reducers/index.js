import { combineReducers } from "redux";
import PokeReducer from './Pokemons';

const reducers = combineReducers({
  pokeRedux: PokeReducer,
});

const rootReducer = (state, action) => {
  return reducers(state, action);
};

export default rootReducer;
