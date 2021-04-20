import React from "react";
import logoPokemon from "../assets/logo.png";

class headerPokedex extends React.Component {
  render() {
    return (
      <header>
        <picture>
          <img src={logoPokemon} alt="Logo Pokemon" />
        </picture>
      </header>
    );
  }
}

export default headerPokedex;
