import React, { useEffect } from 'react';
import './PokemonTypes.css';

function PokemonTypes({ mainType, secType, position }) {

    return (
        <div className={`pokemonCard-types position-${position}`} >
            <div className={`type st ${mainType}`} st>{mainType}</div>
            {secType && <div className={`type nd ${secType}`}>{secType}</div>}
        </div>
    );
}

export default PokemonTypes;
