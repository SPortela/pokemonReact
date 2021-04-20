import React from "react";
import { connect } from "react-redux";
import { getPokemon, fetchPokemons } from "../actions/pokemonActions";
import PokemonSingle from "./pokemonSingle";
import InfiniteScroll from "react-infinite-scroll-component";

class PokemonList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokeSearch: [],
      nextPageUrl: this.props.search.next,
      infinitHasMore: true,
    };
  }

  componentDidMount = () => {
    const { pokemons } = this.props;
    this.props.getPokemon(pokemons);
  };

  handleFetchdata = () => {
    this.props.fetchPokemons({ url: this.state.nextPageUrl });
  };

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.pokemonList !== this.props.pokemonList) {
      const { pokemonList } = nextProps;
      const pokemons = pokemonList.map((pokemon) => {
        return pokemon.data;
      });
      this.setState({ pokeSearch: pokemons });
    }

    if (
      this.props.fetchpokemons !== nextProps.fetchpokemons &&
      !this.props.fetchpokemons
    ) {
      this.props.getPokemon(nextProps.fetchpokemons.results);
      if (nextProps.fetchpokemons.next) {
        this.setState({ nextPageUrl: nextProps.fetchpokemons.next });
      } else {
        this.setState({ infinitHasMore: false });
      }
    }

    if (!nextProps.search.next) {
      this.setState({ infinitHasMore: false });
    }
  };

  renderPokemons = () => {
    const { pokemonLoad } = this.state;
    const result = [];
    pokemonLoad.forEach((pokemon, index) => {
      result.push(
        <PokemonSingle
          key={index}
          pokemon={pokemon}
          onSelectPokemon={this.props.onSelectPokemon}
        />
      );
    });

    return result;
  };
  render() {
    return (
      <div className="row pokeList">
        <PokemonSingle />
        <InfiniteScroll
          dataLength={this.state.pokemonLoad.length}
          next={this.handleFetchdata}
          hasMore={this.state.infinitHasMore}
          loader={
            <div className={"w-100"}>
              <h3>Cargando...</h3>
            </div>
          }
          scrollableTarget="scrollableDiv"
        >
          {this.renderPokemons()}
        </InfiniteScroll>
      </div>
    );
  }
}

const mapStateToProps = ({ pokemonRedux }) => {
  const { search, pokemonSearch, pokemonList, fetchpokemons, searchError } = pokemonRedux;
  return { search, pokemonSearch, pokemonList, fetchpokemons, searchError }
}

export default connect(mapStateToProps, { getPokemon, fetchPokemons })(PokemonList);   
