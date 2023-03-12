import React, { createContext, useState } from 'react';

export const FavoriteContext = createContext();

export const FavoriteProvider = ({children}) => {
    const [favoritesList, setFavoritesList] = useState([]);
    let myPokemons = [];

    const favorite = (pokemon) => {

        if (localStorage.getItem(pokemon)) {
            localStorage.removeItem(pokemon);
            console.log(`Pokemon removido dos favoritos: ${pokemon}`);
        } else {
            localStorage.setItem(pokemon, pokemon);
            console.log(`Favoritou: ${pokemon}`);
        }

        for (let i = 0; i < localStorage.length + 1; i++) {
            const key = localStorage.key(i);
            const value = localStorage.getItem(key);
            myPokemons.push(value);
        }
        
        setFavoritesList(myPokemons);
        console.log(`Lista atualizada possui ${localStorage.length} pokemon(s) favorito(s): ${myPokemons}`);

    }

    return(
        <FavoriteContext.Provider value={{favorite, favoritesList}}>
            {children}
        </FavoriteContext.Provider>
    )
}