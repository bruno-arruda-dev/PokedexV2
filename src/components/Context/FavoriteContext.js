import React, { createContext, useState } from 'react';

export const FavoriteContext = createContext();

export const FavoriteProvider = ({children}) => {
    const [favoritesList, setFavoritesList] = useState([]);

    const favorite = (pokemon) => {

        if (localStorage.getItem(pokemon)) {
            localStorage.removeItem(pokemon)
            console.log(`Pokemon removido dos favoritos: ${pokemon}`);
        } else {
            localStorage.setItem(pokemon, pokemon);
            console.log(`Favoritou: ${pokemon}`);
        }

        for (let i = 0; i < localStorage.length; i++) {
            let myPokemons = [];
            myPokemons.unshift(localStorage.key(i));
            setFavoritesList(myPokemons);
        }

        console.log(`Lista atualizada de pokemons favoritos: ${favoritesList}`);

    }

    return(
        <FavoriteContext.Provider value={{favorite, favoritesList}}>
            {children}
        </FavoriteContext.Provider>
    )
}