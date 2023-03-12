import React, { useContext, useState, useEffect } from 'react';
import { FavoriteContext } from '../Context/FavoriteContext';
import FavoriteCard from './FavoriteCard/FavoriteCard';
import './FavoritesContainer.css';

function FavoritesContainer() {
    const { favoritesList } = useContext(FavoriteContext);
    const [list, setList] = useState([]);
    let myPokemons = [];

    useEffect(()=>{
        setList(favoritesList)
    },[favoritesList]); //Este useEffect monitora as alterações na lista

    useEffect(()=>{
        for (let i = 0; i < localStorage.length + 1; i++) {
            const key = localStorage.key(i);
            const value = localStorage.getItem(key);
            myPokemons.push(value);
            setList(myPokemons);
        }
    },[]); //Este useEffect utiliza a lista extraída diretamente da localStorage quando o componente renderiza

  return (
    <div className='favoritesContainer'>
        {
            list.map((pokemon) => (
                <FavoriteCard key={pokemon} pokemon={pokemon} />
            ))
        }
    </div>
  );
}

export default FavoritesContainer;