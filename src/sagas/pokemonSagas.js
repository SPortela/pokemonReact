import { all, call, fork, put, takeEvery } from 'redux-saga/effects';

import {
    searchPokemons,
    getPokemon,
    getPokemonUrl,
} from '../api/pokemonAPI'

import {
    SEARCH_POKEMONS,
    GET_POKEMON,
    GET_POKEMON_DESCRIPTION,
    GET_POKEMON_ABILITY,
    FETCH_POKEMONS
} from '../constants/ActionsTypes';

import {
    searchPokemonsSuccess,
    getPokemonSuccess,
    getPokemonDescriptionSuccess,
    getPokemonAbilitySuccess,
    fetchPokemonsSuccess,
    getPokemonError
} from '../actions/pokemonActions';


function* searchPokemonsRequest({ payload }) {
    let pokemons = {}
    try {
        if (payload && payload.pokemon) {
            pokemons = {
                count: 1,
                next: null,
                previous: null,
                results: [
                    {
                        name: payload.pokemon,
                        url: `https://pokeapi.co/api/v2/pokemon/${payload.pokemon}`
                    }
                ]
            }
        } else {
            pokemons = yield call(searchPokemons, payload);
        }

        yield put(searchPokemonsSuccess(pokemons));

    } catch (error) {
    }
}

function* getPokemonRequest({ payload }) {
    try {
        const pokemon = yield call(getPokemon, payload);
        yield put(getPokemonSuccess(pokemon));
    } catch (error) {        
        yield put(getPokemonError({message:'El pokemon no se ha encontrado'}));
        
    }
}

function* getPokemonDescriptionRequest({ payload }) {
    try {
        const description = yield call(getPokemonUrl, payload);
        yield put(getPokemonDescriptionSuccess(description));
    } catch (error) {
    }
}

function* getPokemonAbilittyRequest({ payload }) {
    try {
        const ability = yield call(getPokemonUrl, payload);
        yield put(getPokemonAbilitySuccess(ability));
    } catch (error) {
    }
}

function* fetchPokemonsRequest({ payload }) {
    try {        
        const pokemons = yield call(getPokemonUrl, payload);
        yield put(fetchPokemonsSuccess(pokemons));
    } catch (error) {
    }
}

export function* searchPokemonsSaga() {
    yield takeEvery(SEARCH_POKEMONS, searchPokemonsRequest);
}

export function* getPokemonSaga() {
    yield takeEvery(GET_POKEMON, getPokemonRequest);
}

export function* getPokemonDescriptionSaga() {
    yield takeEvery(GET_POKEMON_DESCRIPTION, getPokemonDescriptionRequest);
}

export function* getPokemonAbilitySaga() {
    yield takeEvery(GET_POKEMON_ABILITY, getPokemonAbilittyRequest);
}

export function* fetchPokemonsSaga() {
    yield takeEvery(FETCH_POKEMONS, fetchPokemonsRequest);
}

export default function* rootSaga() {
    yield all([
        fork(searchPokemonsSaga),
        fork(getPokemonSaga),
        fork(getPokemonDescriptionSaga),
        fork(getPokemonAbilitySaga),
        fork(fetchPokemonsSaga)
    ]);
}