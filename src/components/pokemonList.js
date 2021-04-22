import React, { Component } from "react";
import PokemonSingle from "./pokemonSingle";
import InfiniteScroll from "react-infinite-scroll-component";

class PokemonList extends Component {
  state = {
    nextUrl: this.props.pokemonsToList.next,
    infinitHasMore: true,
    pokemonsInList: this.props.pokemonsToList,
    searchError: this.props.errorApi
  };

  componentDidMount = () => {
    //Console.log(this.props.pokemonsToList)
  };  

  handleFetchdata = () => {
    this.fetchListPokemons({ url: this.state.nextUrl });
  };

  fetchListPokemons = async (url) => {
    try {
      const response = await fetch(url.url);
      const data = await response.json();

      this.setState({
        loading: false,
        pokemonsInList: {
          results: [].concat(this.state.pokemonsInList.results, data.results),
        }
        
      });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  renderPokemons = () => {
    const result = [];
    this.props.pokemonsToList.results.forEach((pokemonToRender, index) => {
      result.push(
        <PokemonSingle
          key={index}
          pokemonToSingle={pokemonToRender}
          onSelectPokemon={this.props.onSelectPokemon}
        />
      );
    });
    return result;
  };

  render() {
    return (
      <div
        id={"pokemonDiv"}
        className="pokemonDiv"
        style={{ height: "50rem", overflowX: "hidden", overflowY: "scroll" }}
      >
        <InfiniteScroll
          className="pokemonDiv__infinite"
          dataLength={this.state.pokemonsInList.results.length}
          next={this.handleFetchdata}
          hasMore={this.state.infinitHasMore}
          loader={
            <div className={"w-100"}>
              <h3>Cargando...</h3>
            </div>
          }
          scrollableTarget="pokemonDiv"
        >
          <div className="row pokeList">{this.renderPokemons()}</div>;
        </InfiniteScroll>
      </div>
    );
  }
}

export default PokemonList;
