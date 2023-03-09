import React from 'react';
import './App.css';
import { GetPokemonsProvider } from './components/Context/GetPokemonsContext';
import { PaginationProvider } from './components/Context/PaginationContext';
import Header from './components/Header/Header';
import Pokedex from './components/Pokedex/Pokedex';
import Footer from './components/Footer/Footer';
import { GetPokemonDataProvider } from './components/Context/GetPokemonDataContext';

function App() {
  return (
    <PaginationProvider>
      <GetPokemonsProvider>
        <GetPokemonDataProvider>
          <Header />
          <Pokedex />
          <Footer />
        </GetPokemonDataProvider>
      </GetPokemonsProvider>
    </PaginationProvider>
  );
}

export default App;