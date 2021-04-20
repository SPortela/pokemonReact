import {
    SEARCH_POKEMONS,
    SEARCH_POKEMONS_SUCCESS,
    GET_POKEMON,
    GET_POKEMON_SUCCESS,
    GET_POKEMON_DESCRIPTION,
    GET_POKEMON_DESCRIPTION_SUCCESS,
    GET_POKEMON_ABILITY,
    GET_POKEMON_ABILITY_SUCCESS,
    FETCH_POKEMONS,
    FETCH_POKEMONS_SUCCESS,
    GET_POKEMON_ERROR
} from '../constants/ActionsTypes'

const initialState = {
    search: null,
    pokemonList: [],
    pokemonSingle: null,
    pokemondescription: null,
    pokemonability: null,
    pokemonSearch: [],
    fetchpokemons: null,
    searchError: null
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case SEARCH_POKEMONS:
            return { ...state, search: null, searchParamaters: action.payload, pokemonList: [] }
        case SEARCH_POKEMONS_SUCCESS:
            return { ...state, search: action.payload }
        case GET_POKEMON:
            return { ...state, searchError: null }
        case GET_POKEMON_SUCCESS:
            return { ...state, pokemonList: state.pokemonList.concat(action.payload) }
        case GET_POKEMON_ERROR:
            return { ...state, searchError: action.payload }
        case GET_POKEMON_DESCRIPTION:
            return { ...state, pokemondescription: null }
        case GET_POKEMON_DESCRIPTION_SUCCESS:
            const descripObject = action.payload.flavor_text_entries;
            let result = ''
            descripObject.forEach(text => {
                if (text.language.name === 'en' && text.version.name === 'alpha-sapphire') {
                    result = text.flavor_text;
                }
            });
            return { ...state, pokedescription: result }
        case GET_POKEMON_ABILITY:
            return { ...state, pokeability: null }
        case GET_POKEMON_ABILITY_SUCCESS:
            const abilityObject = action.payload.flavor_text_entries;
            let retAbility = '';
            abilityObject.forEach(text => {
                if (text.language.name === 'en' && text.version_group.name === 'ultra-sun-ultra-moon') {
                    retAbility = text.flavor_text;
                }
            });
            return { ...state, pokemonability: retAbility }
        case FETCH_POKEMONS:
            return { ...state, fetchpokemons: null }
        case FETCH_POKEMONS_SUCCESS:
            return { ...state, fetchpokemons: action.payload }
        default:
            return state
    }
}

export default rootReducer