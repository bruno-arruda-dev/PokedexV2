import React from 'react';
import './App.css';
import { GetPokemonsProvider } from './components/Context/GetPokemonsContext';
import Header from './components/Header/Header';
import Pokedex from './components/Pokedex/Pokedex';
import Pagination from './components/Pagination/Pagination';

function App() {
  return (
    <GetPokemonsProvider>
      <Header />
      <Pokedex />
      <Pagination />
    </GetPokemonsProvider>
  );
}

export default App;