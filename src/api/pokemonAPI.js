import Axios from 'axios';

export const searchPokemons = async () => {
    const response = await Axios.get('https://pokeapi.co/api/v2/pokemon/');
    return response.data;
}

export const getPokemon = async (params) => {    
    if (Array.isArray(params)) {
        const promises = params.map(pokemon => {
            return Axios.get(pokemon.url);
        })
        const response = await Promise.all(promises);
        return response;
    }else{
        return []
    }
}

export const getPokemonUrl = async (params) => {
    const response = await Axios.get(params.url);
    return response.data;
}