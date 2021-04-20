import { all } from 'redux-saga/effects';
import pokemonSaga from './pokemonSagas';

export default function* rootSaga(getState) {
  yield all([
    pokemonSaga(),
  ]);
}
