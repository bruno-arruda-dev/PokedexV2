import React from 'react';
import './App.css';
import { GetPokemonsProvider } from './components/Context/GetPokemonsContext';
import { PaginationProvider } from './components/Context/PaginationContext';
import { GetPokemonDataProvider } from './components/Context/GetPokemonDataContext';
import { FavoriteProvider } from './components/Context/FavoriteContext';
import Header from './components/Header/Header';
import MyPokemon from './components/MyPokemon/MyPokemon';
import Pokedex from './components/Pokedex/Pokedex';
import Footer from './components/Footer/Footer';
import FavoritesContainer from './components/FavoritesContainer/FavoritesContainer';
import InfiniteScroll from './components/InfiniteScroll/InfiniteScroll';

function App() {
  return (
    <PaginationProvider>
      <GetPokemonsProvider>
        <GetPokemonDataProvider>
          <FavoriteProvider>
            <Header />
            <MyPokemon />
            <FavoritesContainer />
            <Pokedex />
            <InfiniteScroll />
            <Footer />
          </FavoriteProvider>
        </GetPokemonDataProvider>
      </GetPokemonsProvider>
    </PaginationProvider>
  );
}

export default App;