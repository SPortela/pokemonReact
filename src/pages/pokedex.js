import React, { Component } from "react";
import { connect } from "react-redux";
import HeaderPokedex from "../components/headerPokedex";
import PokemonSearch from "../components/pokemonSearch";
import PokemonDetail from "../components/pokemonDetail";
import PokemonList from "../components/pokemonList";
import { searchPokemons, getPokemonAbility } from "../actions/pokemonActions";

class Pokedex extends Component {
  state = {
    data: {
      results: [],
    },
    selectedPokemon: null,
    error: null,
    loading: true,
  };

  componentDidMount = () => {
    this.fetchPokemons();
  };

  fetchPokemons = async () => {
    try {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
      const data = await response.json();

      this.setState({
        data: data,
      });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  handleChange = (e) => {
    this.setState({
      searchInput: e.target.value,
    });
    //this.fetchPokemonsFind(this.state.searchInput);
  };

  // fetchPokemonsFind = async (url) => {
  //   if ((url == String.empty) || (url == undefined)) {
  //     url = "";
  //   }
  //   try {
  //     const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + url);
  //     const data = await response.json();

  //   } catch (error) {
  //     this.setState({ loading: false, error: error });
  //   }
  // };

  render() {
    //const { search, pokeability } = this.props;
    return (
      <div className="container-fluid">
        <HeaderPokedex />
        <main className="pageMain">
          <div className="container-fluid">
            <div className="row">
              <PokemonSearch
                onChange={this.handleChange}
                searchInput={this.state.searchInput}
              />
              <div className="col-xs-12 col-sm-12 col-md-7 pokemons">
                <PokemonList
                  errorApi={this.state.error}
                  pokemonsToList={this.state.data}
                  onClik={(selectedPokemon) =>
                    this.setState({ selectedPokemon: selectedPokemon })
                  }
                  searchInput={this.state.searchInput}
                />
              </div>
              <div className="col-xs-12 col-sm-12 col-md-5 pokemon">
                <PokemonDetail pokemonToDetail={this.state.selectedPokemon} />
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

const mapStateToProps = ({ pokeRedux }) => {
  const { search, pokeability } = pokeRedux;
  return { search, pokeability };
};

export default connect(mapStateToProps, { searchPokemons, getPokemonAbility })(
  Pokedex
);
