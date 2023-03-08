import React, { useState, createContext } from 'react';

export const PaginationContext = createContext();

export const PaginationProvider = ({ children }) => {
    const [offset, setOffset] = useState(0); //Deslocamento
    const [currentPage, setCurrentPage] = useState(1); //Página atual
    const pokemonsPerPage = 20; //Máximo de pokemons por página
    const maxPokemons = 1281; //Máximo de pokemons na API
    const maxPages = Math.ceil(maxPokemons / pokemonsPerPage); //Máximo de páginas

    const GoBack = () => {
        if (currentPage === 1) { //Se estiver na primeira página, avança para a última
            setCurrentPage(maxPages);
            setOffset((maxPages - 1) * pokemonsPerPage);
        } else if (currentPage <= maxPages) {
            setOffset(offset - pokemonsPerPage);
            setCurrentPage(currentPage - 1);
        }
    }

    const GoFoward = () => {
        if (currentPage === maxPages) { //Se estiver na última página, retorna para a primeira
            setOffset(0);
            setCurrentPage(1);
        } else if (currentPage >= 1) {
            setOffset(offset + pokemonsPerPage);
            setCurrentPage(currentPage + 1);
        }
    }

    return (<PaginationContext.Provider value={{
        GoBack, GoFoward, offset, currentPage, maxPages
    }}>{ children }</PaginationContext.Provider>)
}