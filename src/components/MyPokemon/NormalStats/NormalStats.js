import React, { useContext } from 'react';
import { GetPokemonDataContext } from '../../Context/GetPokemonDataContext';
import './NormalStats.css';

function NormalStats() {

    const { height, weight } = useContext(GetPokemonDataContext);

    return (
        <div className='normalStats'>
            <div className='heightStat'>
                <div className='heightStat-img height'></div>
                    <p>{height}</p>
            </div>
            <div className='weightStat'>
                <div className='heightStat-img weight'></div>
                <p>{weight}</p>
            </div>
        </div>
    )
}

export default NormalStats