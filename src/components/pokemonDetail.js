import React from "react";
import pokemon from "../assets/pikachu.jpg";

class PokemonDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showAbility: false,
      abilityName: "",
    };
  }
  render() {
    return (
      <div className="detail">
        <div className="detail__title">Pikachu</div>
        <picture className="">
          <img
            className="detail__image"
            src={pokemon}
            alt="Imagen de un Pokemon"
          />
        </picture>
        <div className="detail__Info">
          <div>Id: 0001</div>
          <div>Name: Pikachu</div>
          <div>Habilitty: Eléctrico</div>
        </div>
      </div>
    );
  }
}

export default PokemonDetail;
