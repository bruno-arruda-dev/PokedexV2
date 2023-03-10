import React, { createContext, useState } from 'react';

export const FavoriteContext = createContext();

export const FavoriteProvider = ({children}) => {
    const [favoritesList, setFavoritesList] = useState([]);

    const favorite = (pokemon) => {
        console.log(`Recebido para favoritar ${pokemon}`);
    }

    // const handleClickHeartButton = (event) => {
    //     event.stopPropagation();
    //     if (localStorage.getItem(pokemon)) {
    //       localStorage.removeItem(pokemon);
    //       setHeart("💛");
    //       console.log(`Desfavoritou: ${pokemon}`);
    //     } else {
    //       localStorage.setItem(pokemon, pokemon);
    //       setHeart("❤️");
    //       console.log(`Favoritou: ${pokemon}`);
    //     }
    //   }

    return(
        <FavoriteContext.Provider value={{favorite, favoritesList}}>
            {children}
        </FavoriteContext.Provider>
    )
}