import React from 'react';
import './App.css';
import { GetPokemonsProvider } from './components/Context/GetPokemonsContext';
import Pagination from './components/Footer/Pagination/Pagination';
import Header from './components/Header/Header';
import Pokedex from './components/Pokedex/Pokedex';

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