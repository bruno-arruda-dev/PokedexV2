import React, { useState, useEffect, createContext, useContext } from 'react';
import { getPokemons } from '../API/GetPokemonsAPI';
import { PaginationContext } from './PaginationContext';

export const GetPokemonsContext = createContext();

export const GetPokemonsProvider = ({ children }) => {
  const { limit, offset, scrollLimit } = useContext(PaginationContext);
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchPokemons() {
      setIsLoading(true);
      const pokemonsData = await getPokemons(scrollLimit, offset);
      setPokemons(pokemonsData.results);
      setIsLoading(false);
      console.log(
        `Busca de pokemons concluída: ${scrollLimit} por página e deslocamento iniciando em ${offset}`
      );
    }
    fetchPokemons();
  }, [offset, limit, scrollLimit]);

  return (
    <GetPokemonsContext.Provider value={{ pokemons, isLoading }}>
      {children}
    </GetPokemonsContext.Provider>
  );
};