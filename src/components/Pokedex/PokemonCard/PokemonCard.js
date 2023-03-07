import React, { useState, useEffect } from 'react';
import './PokemonCard.css';
import './CardMainType.css';
import './CardAllTypes.css';
import { getPokemonData } from '../../API/GetPokemonsAPI';

function PokemonCard( { pokemon } ) {

    const [mainImg, setMainImg] = useState("");
    const [secImg, setSecImg] = useState("");
    const [mainType, setMainType] = useState("");
    const [secType, setSecType] = useState("");
    const [id, setId] = useState("");

    useEffect(() => {
        const fetchPokemon = async () => {
            const currentPokemon = await getPokemonData(pokemon);
            setMainImg(currentPokemon.sprites?.other?.dream_world.front_default);
            setSecImg(currentPokemon.sprites?.front_default);
            setMainType(currentPokemon.types[0]?.type.name);
            setSecType(currentPokemon.types[1]?.type.name);
            setId(currentPokemon.id);
        };
        fetchPokemon();
    }, [pokemon]);

  return (
    <div className='pokemonCard' id={pokemon}>
        <img className='pokemonCard-img' src={mainImg ? mainImg : secImg} alt={pokemon}/>
        <div className={`pokemonCard-container bg-${mainType}`}>
            <h3 className='pokemon-title'>{pokemon}</h3>
            <p className='pokemon-id'>#{id}</p>
            <div className='pokemonCard-types'>
                <div className={`type st ${mainType}`} st>{mainType}</div>
                { secType && <div className={`type nd ${secType}`}>{secType}</div> }
            </div>
        </div>
    </div>
  )
}

export default PokemonCard
