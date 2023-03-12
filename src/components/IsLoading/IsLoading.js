import React from 'react';
import PokeballRoll from '../PokeballRoll/PokeballRoll';
import './IsLoading.css';

function IsLoading() {
  return (
    <div className='isLoading'>
        <PokeballRoll />
        <p>CARREGANDO MONSTRINHOS...</p>
    </div>
  )
}

export default IsLoading;