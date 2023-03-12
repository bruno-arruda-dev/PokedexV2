import React, { createContext, useState } from 'react';

export const FavoriteContext = createContext();

export const FavoriteProvider = ({children}) => {
    const [favoritesList, setFavoritesList] = useState([]);
    const [length, setLength] = useState(0);
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
            myPokemons.push(localStorage.key[0]);
        }
        
        setFavoritesList(myPokemons);
        setLength(localStorage.length);
        console.log(`Lista atualizada possui ${length} pokemon(s) favorito(s): ${localStorage}`);

    }

    return(
        <FavoriteContext.Provider value={{favorite, favoritesList}}>
            {children}
        </FavoriteContext.Provider>
    )
}