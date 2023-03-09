import React from 'react';
import './Footer.css';
import Pagination from '../Pagination/Pagination';

function Footer() {
  return (
    <footer className='footer'>
      <Pagination />
      <div className='socialMedias'>
            <a href="https://github.com/BrunoArrm/pokedex">
                <div className='socialMedia github'></div>
            </a>
            <a href="https://linkedin.com/in/bruno-arruda-dev">
                <div className='socialMedia linkedin'></div>
            </a>
        </div>
        <div className='sign'>
            <p>Copyright © 2023 | <span>Bruno Arruda</span> | POKÉAPI | Todos os direitos reservados.</p>
        </div>
    </footer>
  );
}

export default Footer;
