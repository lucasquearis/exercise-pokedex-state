import React, { Component } from 'react';
import Pokedex from './Pokedex';
import NextButton from './NextButton';

class MainContend extends Component {
  constructor(props) {
    super(props)
    this.state = ({
      numerosCliques: 0,
      pokemons: this.props.pokemons,
    })
    this.changePokemon = this.changePokemon.bind(this);
    this.filterElectric = this.filterElectric.bind(this);
    this.filterFire = this.filterFire.bind(this);
    this.filterBug = this.filterBug.bind(this);
    this.allButton = this.allButton.bind(this);
    this.filterPoison = this.filterPoison.bind(this);
    this.filterPsychic = this.filterPsychic.bind(this);
    this.filterNormal = this.filterNormal.bind(this);
    this.filterDragon = this.filterDragon.bind(this);
  }
  
  allButton() {
    const { pokemons } = this.props;
    this.setState({pokemons: pokemons})
  }

  filterElectric() {
    const { pokemons } = this.props;
    const electricFilter = pokemons.filter((pokemon) => pokemon.type === 'Electric')
    this.setState({pokemons: electricFilter})
  }

  filterFire() {
    const { pokemons } = this.props;
    const firteFilter = pokemons.filter((pokemon) => pokemon.type === 'Fire')
    this.setState({pokemons: firteFilter})
  }

  filterBug() {
    const { pokemons } = this.props;
    const bugFilter = pokemons.filter((pokemon) => pokemon.type === 'Bug')
    this.setState({pokemons: bugFilter})
  }

  filterPoison() {
    const { pokemons } = this.props;
    const poisonFilter = pokemons.filter((pokemon) => pokemon.type === 'Poison')
    this.setState({pokemons: poisonFilter})
  }

  filterPsychic() {
    const { pokemons } = this.props;
    const psychicFilter = pokemons.filter((pokemon) => pokemon.type === 'Psychic')
    this.setState({pokemons: psychicFilter})
  }

  filterNormal() {
    const { pokemons } = this.props;
    const normalFilter = pokemons.filter((pokemon) => pokemon.type === 'Normal')
    this.setState({pokemons: normalFilter})
  }

  filterDragon() {
    const { pokemons } = this.props;
    const dragonFilter = pokemons.filter((pokemon) => pokemon.type === 'Dragon')
    this.setState({pokemons: dragonFilter})
  }

  changePokemon() {
    const { numerosCliques, pokemons } = this.state;
    if(numerosCliques === pokemons.length -1) this.setState({numerosCliques: -1})
    this.setState((prevState)=>({
      numerosCliques: prevState.numerosCliques + 1,
    }))
  }

  render() {
    const {
      changePokemon,
      allButton,
      filterElectric,
      filterFire,
      filterBug,
      filterPoison,
      filterPsychic,
      filterNormal,
      filterDragon,
    } = this;
    const { numerosCliques, pokemons } = this.state;
    return(
      <>
        <Pokedex pokemons={pokemons[numerosCliques]} />
        <div>
          <button
            onClick={allButton}>All</button>
          <button
            onClick={filterElectric}>Electric</button>
          <button
            onClick={filterFire}>Fire</button>
          <button
            onClick={filterBug}>Bug</button>
          <button
            onClick={filterPoison}>Poison</button>
          <button
            onClick={filterPsychic}>Psychic</button>
          <button
            onClick={filterNormal}>Normal</button>
          <button
            onClick={filterDragon}>Dragon</button>
        </div>
        <NextButton handleClick={changePokemon} />
      </>
    );
  }
}

export default MainContend;