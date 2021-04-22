import React, { Component } from "react";

class PokemonSingle extends Component {
  state = {
    pokemonInSingle: {
      sprites: [],
    },
    loading: false,
    error: null,
  };
  componentDidMount = () => {
    console.log(this.props)
    this.fetchPokemons();
  };

  fetchPokemons = async () => {
    try {
      const response = await fetch(this.props.pokemonToSingle.url);
      const data = await response.json();
      this.setState({
        loading: false,
        pokemonInSingle: data,
      });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  handleClick = (pokemon) => {
    this.props.onSelectPokemon(pokemon);
  }

  render() {
    const pokemonNextImage = this.state.pokemonInSingle.sprites
      ? this.state.pokemonInSingle.sprites.front_default
      : this.state.pokemonInSingle.sprites.other.dream_world
      ? this.state.pokemonInSingle.sprites.other.dream_world.front_default
      : null;
    return (
      <div
        className="col"
        onClick={() => this.handleClick(this.props.pokemonToSingle)}
      >
        <div className="item">
          <picture>
            <img
              className="item__pokemon-img w-100 h-100"
              src={pokemonNextImage}
              alt={this.props.pokemonToSingle.name}
              title={this.props.pokemonToSingle.name}
            />
          </picture>
        </div>
      </div>
    );
  }
}

export default PokemonSingle;
