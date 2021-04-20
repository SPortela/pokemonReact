import React from "react";
import { connect } from 'react-redux';
import pokemon from "../assets/pikachu.jpg";
import { getPokemon } from "../actions/pokemonActions"

class PokemonSingle extends React.Component {
  componentDidMount = () => {
    const { pokemon } = this.props;
    this.props.getPokemon({ url: pokemon.url });
  };

  handleSelect = (pokemon) => {
    this.props.onSelectPokemon(pokemon);
  };

  render() {
    const mainImage = pokemon.sprites ? pokemon.sprites.front_default : null;
    return (
      <div className="col" onClick={() => this.handleSelect(pokemon)}>
        <div className="item">
          <picture>
            <img
              className="item__pokemon-img"
              src={mainImage}
              alt={pokemon.name}
            />
          </picture>
        </div>
      </div>
    );
  }
}
const mapStateToProps = ({ pokemonRedux }) => {
  const { pokemonList } = pokemonRedux;
  return { pokemonList }
}

export default connect(mapStateToProps, { getPokemon })(PokemonSingle);   