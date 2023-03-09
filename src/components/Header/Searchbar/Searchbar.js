import React from 'react';
import './Searchbar.css';

function Searchbar() {

  return (
    <div className='searchbar'>
        <input  className='searchbar-input' 
                placeholder='Procurar um monstrinho!'
        ></input>
        <button className='searchbar-button' 
        ></button>
    </div>
  )
}

export default Searchbar;