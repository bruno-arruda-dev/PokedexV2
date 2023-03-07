import React, { useState, useEffect, createContext } from 'react';
import { getPokemons } from '../API/GetPokemonsAPI';

export const GetPokemonsContext = createContext();

export const GetPokemonsProvider = ({ children }) => {
  const [offset, setOffset] = useState(0);
  const [pokemonsPerPage, setPokemonsPerPage] = useState(50);
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
    <GetPokemonsContext.Provider value={{ pokemonsPerPage, offset, pokemons }}>
      {children}
    </GetPokemonsContext.Provider>
  );
};
