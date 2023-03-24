import React from 'react';
import './PokemonTypes.css';

function PokemonTypes({ mainType, secType }) {


    return (
        <div className='pokemonCard-types'>
            <div className={`type st ${mainType}`} st>{mainType}</div>
            {secType && <div className={`type nd ${secType}`}>{secType}</div>}
        </div>
    );
}

export default PokemonTypes;
