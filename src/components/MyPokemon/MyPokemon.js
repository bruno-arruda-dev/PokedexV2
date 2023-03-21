import React, { useContext, useState, useEffect } from 'react';
import './MyPokemon.css';
import '../Pokedex/PokemonCard/CardMainType.css';
import { GetPokemonDataContext } from '../Context/GetPokemonDataContext';
import NormalStats from './NormalStats/NormalStats';
import BattleStats from './BattleStats/BattleStats';
import { FavoriteContext } from '../Context/FavoriteContext';

function MyPokemon() {
  const logo = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";
  const { pokemon, mainImg, id, secImg, mainType, hide, setErro, erro, setHide } = useContext(GetPokemonDataContext);
  const [ isOpen, setIsOpen ] = useState("");
  const { favorite, favoritesList } = useContext(FavoriteContext);
  const [heart, setHeart] = useState("💛");

  const handleClickHeartButton = (event) => {
    favorite(pokemon);
  }

  useEffect(()=>{
    localStorage.getItem(pokemon) ? setHeart("❤️") : setHeart("💛");
    if (isOpen === "modalClose") {
      setIsOpen("modalOpen");
    }
  }, [pokemon, favoritesList]);

  const goTo = () => {
    const myPokemon = document.getElementById(pokemon);
    myPokemon.scrollIntoView({ behavior: 'smooth', block: "start" });
  }

  const closerModal = () => {
      setHide(true);
  };

  const closerErrorModal = () => {
    setHide(true);
    setErro("");
};

  return (
    <>
      {
        erro === "Pokemon não encontrado"
          ?
          <div className={`notFoundError bg-normal`}>
            <div class="xclose" onClick={closerErrorModal}>X</div>
            <div className='erro-message-img'></div>
            <p>
              Pokemon "{pokemon}" não foi encontrado!
            </p>
          </div>
          :
          !hide && (
            <div className={`myPokemon bg-${mainType}`} id="myPokemon">
              <div class="xclose" onClick={closerModal}>X</div>
              <p className="myPokemon-title">{pokemon}</p>
              <button onClick={handleClickHeartButton}>{heart}</button>
              <div className="pokemonStats">
                <div className="myPokemon-battleStats">
                  <BattleStats />
                  <NormalStats />
                </div>
                <div className={mainImg ? "myPokemon-img" : (secImg ? "myPokemon-img" : "not-Found-Img-MyPokemon")}>
                  <img  src={mainImg ? mainImg : (secImg ? secImg : logo)} //Verifica se a imagem principal ou a secundária foram encontradas. Se não aplica-se a LOGO padrão da API
                        alt={pokemon} onClick={goTo} />
                  <p className='myPokemon-id'>#{id.toString().padStart(3, "0")}</p>
                </div>
              </div>
            </div>
          )}
    </>
  );
}

export default MyPokemon;