import React from 'react';
import './App.css';
import { GetPokemonsProvider } from './components/Context/GetPokemonsContext';
import Header from './components/Header/Header';
import Pokedex from './components/Pokedex/Pokedex';
import Pagination from './components/Pagination/Pagination';
import { PaginationProvider } from './components/Context/PaginationContext';

function App() {
  return (
    <PaginationProvider>
      <GetPokemonsProvider>
        <Header />
        <Pokedex />
        <Pagination />
      </GetPokemonsProvider>
    </PaginationProvider>
  );
}

export default App;