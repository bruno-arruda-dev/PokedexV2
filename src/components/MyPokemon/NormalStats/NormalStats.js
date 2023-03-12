import React, { useContext } from 'react';
import { GetPokemonDataContext } from '../../Context/GetPokemonDataContext';
import './NormalStats.css';

function NormalStats() {

    const { height, weight } = useContext(GetPokemonDataContext);

  return (
    <div className='normalStats'>
        <div className='heightStat'>
            <div className='line'>
                <p>{height}</p>
            </div>
            <p>Altura</p>
        </div>
        <div className='weightStat'>
        <div className='line'>
                <p>{weight}</p>
            </div>
            <p>Peso</p>
        </div>
    </div>
  )
}

export default NormalStats