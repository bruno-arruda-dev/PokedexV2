import React, { useContext } from 'react';
import { GetPokemonsContext } from '../Context/GetPokemonsContext';
import IsLoading from '../IsLoading/IsLoading';
import './Pokedex.css';
import PokemonCard from './PokemonCard/PokemonCard';

function Pokedex() {

  const { pokemons, isLoading } = useContext(GetPokemonsContext);

  return (
    <div className='pokedex'>
      {
        pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.name} pokemon={pokemon.name} />
        ))
      }
    </div>
  )
}

export default Pokedex;