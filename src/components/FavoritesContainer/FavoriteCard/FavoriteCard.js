import React, {useState, useEffect, useContext} from 'react';
import './FavoriteCard.css';
import { getPokemonData } from '../../API/GetPokemonsAPI';
import { GetPokemonDataContext } from '../../Context/GetPokemonDataContext';

function FavoriteCard({pokemon}) {
    const { updatePokemonName } = useContext(GetPokemonDataContext);
    const [mainImg, setMainImg] = useState("");
    const [secImg, setSecImg] = useState("");
    const [backImg, setBackImg] = useState("");

    useEffect(() => {
        const fetchPokemon = async () => {
            const currentPokemon = await getPokemonData(pokemon);
            setMainImg(currentPokemon.sprites?.other?.dream_world.front_default);
            setSecImg(currentPokemon.sprites?.front_default);
            setBackImg(currentPokemon.sprites?.back_default);

        };
        fetchPokemon();
    }, [pokemon]);

    
    const handleCardClick = () => {
        updatePokemonName(pokemon);
        console.log(`Enviado para busca: ${pokemon}`);
    } 

  return (
    <img    className='favoriteCard'
            src={secImg}
            alt={pokemon}
            title={pokemon}
            onClick={handleCardClick} />
  );
}

export default FavoriteCard;
