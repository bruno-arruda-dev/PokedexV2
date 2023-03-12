import React, { useContext, useState, useEffect } from 'react';
import './MyPokemon.css';
import '../Pokedex/PokemonCard/CardMainType.css';
import { GetPokemonDataContext } from '../Context/GetPokemonDataContext';
import NormalStats from './NormalStats/NormalStats';
import BattleStats from './BattleStats/BattleStats';
import { FavoriteContext } from '../Context/FavoriteContext';

function MyPokemon() {

  const { pokemon, mainImg, secImg, mainType, hide, erro } = useContext(GetPokemonDataContext);
  // const logo = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";
  const { favorite, favoritesList } = useContext(FavoriteContext);
  const [heart, setHeart] = useState("💛");

  const handleClickHeartButton = (event) => {
    favorite(pokemon);
  }

  useEffect(()=>{
    localStorage.getItem(pokemon) ? setHeart("❤️") : setHeart("💛");
  }, [pokemon, favoritesList]);

  const goTo = () => {
    const myPokemon = document.getElementById(pokemon);
    myPokemon.scrollIntoView({ behavior: 'smooth', block: "start" });
  }

  return (
    <>
      {
        erro === "Pokemon não encontrado"
          ?
          <div className={`myPokemon mainType-normal`} style={{ height: "fit-content" }}>
            <div className='erro-message-img'></div>
            <p>
              Pokemon "{pokemon}" não foi encontrado!
            </p>
          </div>
          :
          !hide && (
            <div className={`myPokemon bg-${mainType}`} id="myPokemon">
              <p className="myPokemon-title">{pokemon}</p>
              <button onClick={handleClickHeartButton}>{heart}</button>
              <div className="pokemonStats">
                <div className="myPokemon-battleStats">
                  <BattleStats />
                  <NormalStats />
                </div>
                <div className="myPokemon-img">
                  <img src={mainImg ? mainImg : secImg} alt={pokemon} onClick={goTo} />
                </div>
              </div>
            </div>
          )}
    </>
  );
}

export default MyPokemon;