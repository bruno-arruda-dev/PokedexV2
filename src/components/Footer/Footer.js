import React from 'react';
import './Footer.css';
import Pagination from '../Pagination/Pagination';

function Footer() {
  return (
    <footer className='footer'>
      <Pagination />
      <div className='socialMedias'>
            <a href="https://github.com/BrunoArrm/PokedexV2" target="_blank">
                <div className='socialMedia github'></div>
            </a>
            <a href="https://linkedin.com/in/bruno-arruda-dev" target="_blank">
                <div className='socialMedia linkedin'></div>
            </a>
        </div>
        <div className='sign'>
            <p>Copyright © 2023 | <span>Bruno Arruda</span> | <a className='pokeapi' href="https://pokeapi.co/" target="_blank">POKÉAPI</a> | Todos os direitos reservados.</p>
        </div>
    </footer>
  );
}

export default Footer;
