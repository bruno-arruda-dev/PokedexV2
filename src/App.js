import React from 'react';
import './App.css';
import { GetPokemonsProvider } from './components/Context/GetPokemonsContext';
import Header from './components/Header/Header';
import Pokedex from './components/Pokedex/Pokedex';
import { PaginationProvider } from './components/Context/PaginationContext';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <PaginationProvider>
      <GetPokemonsProvider>
        <Header />
        <Pokedex />
        <Footer />
      </GetPokemonsProvider>
    </PaginationProvider>
  );
}

export default App;