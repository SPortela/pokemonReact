import {
    SEARCH_POKEMONS,
    SEARCH_POKEMONS_SUCCESS,
    GET_POKEMON,
    GET_POKEMON_SUCCESS,
    GET_POKEMON_ERROR,
    GET_POKEMON_DESCRIPTION,
    GET_POKEMON_DESCRIPTION_SUCCESS,
    GET_POKEMON_ABILITY,
    GET_POKEMON_ABILITY_SUCCESS,
    FETCH_POKEMONS,
    FETCH_POKEMONS_SUCCESS
} from '../constants/ActionsTypes';


export const searchPokemons = (params) => {
    return {
      type: SEARCH_POKEMONS,
      payload: params
    }
};

export const searchPokemonsSuccess = (response) => {
    return {
      type: SEARCH_POKEMONS_SUCCESS,
      payload: response
    }
};

export const getPokemon = (params) => {
  return {
    type: GET_POKEMON,
    payload: params
  }
};

export const getPokemonSuccess = (response) => {
  return {
    type: GET_POKEMON_SUCCESS,
    payload: response
  }
};

export const getPokemonError = (response) => {
  return {
    type: GET_POKEMON_ERROR,
    payload: response
  }
};

export const getPokemonDescription = (params) => {
  return {
    type: GET_POKEMON_DESCRIPTION,
    payload: params
  }
};

export const getPokemonDescriptionSuccess = (response) => {
  return {
    type: GET_POKEMON_DESCRIPTION_SUCCESS,
    payload: response
  }
};

export const getPokemonAbility = (params) => {
  return {
    type: GET_POKEMON_ABILITY,
    payload: params
  }
};

export const getPokemonAbilitySuccess = (response) => {
  return {
    type: GET_POKEMON_ABILITY_SUCCESS,
    payload: response
  }
};

export const fetchPokemons = (params) => {
  return {
    type: FETCH_POKEMONS,
    payload: params
  }
};

export const fetchPokemonsSuccess = (response) => {
  return {
    type: FETCH_POKEMONS_SUCCESS,
    payload: response
  }
};