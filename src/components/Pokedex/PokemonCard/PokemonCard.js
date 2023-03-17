import React, { useState, useEffect, useContext } from 'react';
import './PokemonCard.css';
import './CardMainType.css';
import './CardAllTypes.css';
import { getPokemonData } from '../../API/GetPokemonsAPI';
import { GetPokemonDataContext } from '../../Context/GetPokemonDataContext';
import { FavoriteContext } from '../../Context/FavoriteContext';
import PokeballRoll from '../../PokeballRoll/PokeballRoll';

function PokemonCard({ pokemon }) {
    const logo = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";
    const { updatePokemonName } = useContext(GetPokemonDataContext);
    const [name, setName] = useState("");
    const [mainImg, setMainImg] = useState("");
    const [secImg, setSecImg] = useState("");
    const [mainType, setMainType] = useState("");
    const [secType, setSecType] = useState("");
    const [id, setId] = useState("");
    const { favorite, favoritesList } = useContext(FavoriteContext);
    const [heart, setHeart] = useState("💛");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchPokemon = async () => {
            setIsLoading(true);
            const currentPokemon = await getPokemonData(pokemon);
            setName(currentPokemon.name);
            setMainImg(currentPokemon.sprites?.other?.dream_world.front_default);
            setSecImg(currentPokemon.sprites?.front_default);
            setMainType(currentPokemon.types[0]?.type.name);
            setSecType(currentPokemon.types[1]?.type.name);
            setId(currentPokemon.id);
            setIsLoading(false);
        };
        fetchPokemon();
    }, [pokemon]);

    const handleClickHeartButton = (event) => {
        event.stopPropagation();
        favorite(pokemon);
    }

    useEffect(() => {
        localStorage.getItem(pokemon) ? setHeart("❤️") : setHeart("💛");
    }, [name, favoritesList]);

    const handleCardClick = () => {
        let nameFix = name.trim();
        nameFix = nameFix.toLowerCase();
        updatePokemonName(name);
        console.log(`Enviado para busca: ${nameFix}`);
    }



    return (
        <div className='pokemonCard' id={pokemon} onClick={handleCardClick}>
            {isLoading ? <PokeballRoll /> : (
                <>
                    <img className={mainImg ? "pokemonCard-img" : (secImg ? "pokemonCard-img" : "not-Found-Img-PokemonCard")} //Aplica a classe adequada para quando nem a imagem principal, nem a secundárias são encontradas
                        src={mainImg ? mainImg : (secImg ? secImg : logo)} //Verifica se a imagem principal ou a secundária foram encontradas. Se não aplica-se a LOGO padrão da API
                        alt={pokemon} />
                    <button onClick={handleClickHeartButton}>{heart}</button>
                    <div className={`pokemonCard-container bg-${mainType}`}>
                        <h3 className='pokemon-title'>{name}</h3>
                        <div className='idContainer'>
                            <p className='pokemon-id'>{id.toString().padStart(4, "0")}</p>
                        </div>
                        <div className='pokemonCard-types'>
                            <div className={`type st ${mainType}`} st>{mainType}</div>
                            {secType && <div className={`type nd ${secType}`}>{secType}</div>}
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

export default PokemonCard;