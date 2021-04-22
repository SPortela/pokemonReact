import React, { Component } from "react";
import pokemon from "../assets/pikachu.jpg";

class PokemonDetail extends Component {
  state = {
    pokemonInDetail: [],
  };
  componentDidMount = () => {
    this.state.pokemonInDetail = this.props.pokemonToDetail;
  };
  render() {
    if (this.state.pokemonInDetail == null) {
      return "";
    }
    return (
      <div className="detail">
        <div className="detail__title">{this.state.pokemonInDetail.name}</div>
        <picture className="detail__picture">
          <img
            className="detail__image"
            src={pokemon}
            alt="Imagen de un Pokemon"
          />
        </picture>
        <div className="detail__Info">
          <div>Id: 001</div>
          <div>Name: Pikachu</div>
          <div>Habilitty: Eléctrico</div>
          <div>Description: This is pikachu is Ash's pokemon</div>
        </div>
      </div>
    );
  }
}

export default PokemonDetail;
