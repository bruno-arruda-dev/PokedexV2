import React from 'react';
import BrunoArruda from '../BrunoArruda/BrunoArruda';
import './Header.css';
import Searchbar from './Searchbar/Searchbar';

function Header() {
  const logo = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";
  return (
    <header className='header'>
      <BrunoArruda />
      <img src={logo} alt="PokéApi" />
      <Searchbar />
    </header>
  )
}

export default Header;