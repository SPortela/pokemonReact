import React from "react";
import { connect } from 'react-redux';
import HeaderPokedex from "../components/headerPokedex";
import PokemonDetail from "../components/pokemonDetail";
import PokemonList from "../components/pokemonList";
import { searchPokemons, getPokemonAbility } from '../actions/pokemonActions';

class Pokedex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPokemon: null,
    }
  }
  render() {
    const { search, pokemonAbility } = this.props;
    return (
      <div>
        <HeaderPokedex />
        <main className="pageMain">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-7 pokemons">

                <PokemonList
                  pokemons={""}
                  onSelectPokemon={(selectedPokemon) =>
                    this.setState({ selectedPokemon })
                  }
                />
              </div>
              <div className="col-xs-12 col-sm-12 col-md-5 pokemon">
                <PokemonDetail
                  handleGetAbility={this.props.getPokemonAbility}
                  pokemon={this.state.selectedPokemon}
                  ability={pokemonAbility}
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

const mapStateToProps = ({ pokemonRedux }) => {
  const { search, ability } = pokemonRedux;
  return { search, ability };
};

export default connect(mapStateToProps, { searchPokemons, getPokemonAbility })(
  Pokedex
);
