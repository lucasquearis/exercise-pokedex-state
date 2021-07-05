import React from 'react';
import './App.css';
import pokemons from './data';
import MainContend from './components/MainContend';

class App extends React.Component {
  render() {
    return (
      <>
        <div className="App">
          <h1> Pokedex </h1>
          <MainContend pokemons={pokemons} />
        </div>
      </>
    );
  }
}

export default App;