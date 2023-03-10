import React, { useState, useEffect, useContext } from 'react';
import './PokemonCard.css';
import './CardMainType.css';
import './CardAllTypes.css';
import { getPokemonData } from '../../API/GetPokemonsAPI';
import { GetPokemonDataContext } from '../../Context/GetPokemonDataContext';

function PokemonCard( { pokemon } ) {
    const { updatePokemonName } = useContext(GetPokemonDataContext);
    const [name, setName] = useState("");
    const [mainImg, setMainImg] = useState("");
    const [secImg, setSecImg] = useState("");
    const [mainType, setMainType] = useState("");
    const [secType, setSecType] = useState("");
    const [id, setId] = useState("");

    useEffect(() => {
        const fetchPokemon = async () => {
            const currentPokemon = await getPokemonData(pokemon);
            setName(currentPokemon.name);
            setMainImg(currentPokemon.sprites?.other?.dream_world.front_default);
            setSecImg(currentPokemon.sprites?.front_default);
            setMainType(currentPokemon.types[0]?.type.name);
            setSecType(currentPokemon.types[1]?.type.name);
            setId(currentPokemon.id);
        };
        fetchPokemon();
    }, [pokemon]);

    const handleCardClick = () => {
        detailPokemon();
    }

    const detailPokemon = () => {
          let nameFix = name.trim();
          nameFix = nameFix.toLowerCase();
          updatePokemonName(name);
          console.log(`Enviado para busca: ${nameFix}`);
      } 

  return (
    <div className='pokemonCard' id={pokemon} onClick={handleCardClick}>
        <img className='pokemonCard-img' src={mainImg ? mainImg : secImg} alt={pokemon}/>
        <div className={`pokemonCard-container bg-${mainType}`}>
            <h3 className='pokemon-title'>{name}</h3>
            <p className='pokemon-id'>#{id}</p>
            <div className='pokemonCard-types'>
                <div className={`type st ${mainType}`} st>{mainType}</div>
                { secType && <div className={`type nd ${secType}`}>{secType}</div> }
            </div>
        </div>
    </div>
  )
}

export default PokemonCard;