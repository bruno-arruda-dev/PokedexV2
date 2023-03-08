import React, { useState, useEffect, createContext, useContext } from 'react';
import { getPokemons } from '../API/GetPokemonsAPI';
import { PaginationContext } from './PaginationContext';

export const GetPokemonsContext = createContext();

export const GetPokemonsProvider = ({ children }) => {
  const {offset, pokemonsPerPage} = useContext(PaginationContext);
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    async function fetchPokemons() {
      const pokemonsData = await getPokemons(pokemonsPerPage, offset);
      setPokemons(pokemonsData.results);
      console.log(
        `Busca de pokemons concluída: ${pokemonsPerPage} por página e deslocamento iniciando em ${offset}`
      );
    }
    fetchPokemons();
  }, [offset, pokemonsPerPage]);

  return (
    <GetPokemonsContext.Provider value={{ pokemons }}>
      {children}
    </GetPokemonsContext.Provider>
  );
};