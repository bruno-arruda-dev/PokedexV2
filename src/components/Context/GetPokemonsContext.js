import React, { useState, useEffect, createContext, useContext } from 'react';
import { getPokemons } from '../API/GetPokemonsAPI';
import { PaginationContext } from './PaginationContext';

export const GetPokemonsContext = createContext();

export const GetPokemonsProvider = ({ children }) => {
  const {limit, offset} = useContext(PaginationContext);
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    async function fetchPokemons() {
      const pokemonsData = await getPokemons(limit, offset);
      setPokemons(pokemonsData.results);
      console.log(
        `Busca de pokemons concluída: ${limit} por página e deslocamento iniciando em ${offset}`
      );
    }
    fetchPokemons();
  }, [offset, limit]);

  return (
    <GetPokemonsContext.Provider value={{ pokemons }}>
      {children}
    </GetPokemonsContext.Provider>
  );
};