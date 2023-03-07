import React, { useState, createContext } from 'react';

export const PaginationContext = createContext();

export const PaginationProvider = ({ children }) => {
    const [offset, setOffset] = useState(0); //Deslocamento
    const [currentPage, setCurrentPage] = useState(1); //Página atual
    const pokemonsPerPage = 50; //Máximo de pokemons por página
    const maxPokemons = 1281; //Máximo de pokemons na API
    const maxPages = Math.ceil(maxPokemons / pokemonsPerPage); //Máximo de páginas

    const handlePageBack = () => {
        if (currentPage < maxPages) {
            setOffset(offset - pokemonsPerPage);
            setCurrentPage(currentPage - 1);
        }
    }

    const handlePageFoward = () => {
        if (currentPage > 1) {
            setOffset(offset + pokemonsPerPage);
            setCurrentPage(currentPage + 1);
        }
    }

    return (<PaginationContext.Provider value={{
        handlePageBack, handlePageFoward, offset, currentPage
    }}>{ children }</PaginationContext.Provider>)
}