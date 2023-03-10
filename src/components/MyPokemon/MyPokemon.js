import React, { useContext, useState, useEffect } from 'react';
import './MyPokemon.css';
import '../Pokedex/PokemonCard/CardMainType.css';
import { GetPokemonDataContext } from '../Context/GetPokemonDataContext';
import NormalStats from './NormalStats/NormalStats';
import BattleStats from './BattleStats/BattleStats';

function MyPokemon() {

  const { pokemon, mainImg, secImg, mainType, hide, erro } = useContext(GetPokemonDataContext);
  // const logo = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";
  const [heart, setHeart] = useState("💛");

  useEffect(() => {
    if (localStorage.getItem(pokemon)) {
      setHeart("❤️")
    } else {
      setHeart("💛")
    }
  }, [pokemon]);

  const handleClickHeartButton = (event) => {
    event.stopPropagation();
    if (localStorage.getItem(pokemon)) {
      localStorage.removeItem(pokemon);
      setHeart("💛");
      console.log(`Desfavoritou: ${pokemon}`);
    } else {
      localStorage.setItem(pokemon, pokemon);
      setHeart("❤️");
      console.log(`Favoritou: ${pokemon}`);
    }
  }

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