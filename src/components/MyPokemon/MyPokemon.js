import React, { useContext, useState, useEffect } from 'react';
import './MyPokemon.css';
import '../Pokedex/PokemonCard/CardMainType.css';
import { GetPokemonDataContext } from '../Context/GetPokemonDataContext';
import NormalStats from './NormalStats/NormalStats';
import BattleStats from './BattleStats/BattleStats';

function MyPokemon() {

    const { name, mainImg, secImg, mainType, hide, erro} = useContext(GetPokemonDataContext);
    // const logo = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";
    const [heart, setHeart] = useState("💛");

    const backToPokemonCard = () => {
      const myPokemon = document.getElementById(name);
      myPokemon.scrollIntoView({behavior: 'smooth', block: "start"});
  };

  useEffect(()=>{
    if(localStorage.getItem(name)) {
        setHeart("❤️")
    } else {
        setHeart("💛")
    }
  },[name])

const handleClickHeartButton = (event) => {
    event.stopPropagation();
    if (localStorage.getItem(name)) {
        localStorage.removeItem(name);
        setHeart("💛");
        console.log(`Desfavoritou: ${name}`);
    } else {
        localStorage.setItem(name, name);
        setHeart("❤️");
        console.log(`Favoritou: ${name}`);
    }
}

    return (
        <>
          {
            erro === "Pokemon não encontrado" 
          ? 
            <div className={`myPokemon mainType-normal`} style={{height: "fit-content"}}>
              <div className='erro-message-img'></div>
              <p>
                Pokemon "{name}" não foi encontrado!
              </p>
            </div> 
          : 
            !hide && (
              <div className={`myPokemon bg-${mainType}`} id="myPokemon">
                <p className="myPokemon-title">{name} / {erro} / {hide}</p>
                <button onClick={handleClickHeartButton}>{heart}</button>
                <div className="pokemonStats">
                  <div className="myPokemon-battleStats">
                      <BattleStats />
                      <NormalStats />
                  </div>
                  <div className="myPokemon-img">
                    <img src={mainImg ? mainImg : secImg} alt={name} onClick={backToPokemonCard} />
                  </div>
                </div>
              </div>
            )}
        </>
      );
    }
    

export default MyPokemon;