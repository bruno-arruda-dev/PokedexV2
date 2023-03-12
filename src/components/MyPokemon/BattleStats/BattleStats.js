import React, { useContext } from 'react';
import { GetPokemonDataContext } from '../../Context/GetPokemonDataContext';
import GraphicLine from './GraphicLine/GraphicLine';
import './BattleStats.css';

function BattleStats() {

    const {hp, atk, xAtk, def, xDef, spd} = useContext(GetPokemonDataContext);

  return (
    <div className='battleStats'>
        <GraphicLine content="hp" value={hp}/>
        <GraphicLine content="atk" value={atk}/>
        <GraphicLine content="xatk" value={xAtk}/>
        <GraphicLine content="def" value={def}/>
        <GraphicLine content="xdef" value={xDef}/>
        <GraphicLine content="spd" value={spd}/>
    </div>
  )
}

export default BattleStats;