import React from 'react';
import './Header.css';
import Searchbar from './Searchbar/Searchbar';

function Header() {
    const logo = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";
  return (
    <header className='header'>
        <img src={logo} alt="PokéApi"/>
        <Searchbar />
    </header>
  )
}

export default Header;