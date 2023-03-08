export const getPokemons = async (limit, offset) => {
    try {
        let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
        // let url = `https://pokeapi.co/api/v2/pokemon?limit=50&offset=0`;
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.log("getPokemonErro: ", error);
    }
};

export const getPokemonData = async (pokemon) => {

    try {
        let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.log("getPokemonDataErro: ", error);
    }
};