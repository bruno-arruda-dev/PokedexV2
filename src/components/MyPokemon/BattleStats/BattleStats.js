import React, { useContext } from 'react';
import { GetPokemonDataContext } from '../../Context/GetPokemonDataContext';
import GraphicLine from './GraphicLine/GraphicLine';
import './BattleStats.css';

function BattleStats() {

    const {hp, atk, xAtk, def, xDef, spd} = useContext(GetPokemonDataContext);

  return (
    <div className='battleStats'>
        <GraphicLine content="hp" numericalValue={hp} value={( hp / 250 ) * 100} />
        <GraphicLine content="atk" numericalValue={atk} value={( atk / 250 ) * 100} />
        <GraphicLine content="xatk" numericalValue={xAtk} value={(xAtk / 250) * 100} />
        <GraphicLine content="def" numericalValue={def} value={(def / 250) * 100} />
        <GraphicLine content="xdef" numericalValue={xDef} value={(xDef / 250) * 100} />
        <GraphicLine content="spd" numericalValue={spd} value={(spd / 250 ) * 100} />
    </div>
  )
}

export default BattleStats;