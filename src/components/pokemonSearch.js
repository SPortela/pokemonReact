import React, { Component } from "react";

class PokemonSearch extends Component {
  render() {
    return (
      <div className="col-12 searchComponent">
        <div className="row">
          <div className="col-1"></div>
          <div className="col-10">
            <form className="form-floating">
              <input
                onChange={this.props.onChange}
                type="text"
                id="floatingInputValue"
                className="form-control form-control-lg inputForm"
                placeholder="Buscar un Pokemon"
                name="searchInput"
                value={this.props.searchInput}
              />
              <label for="floatingInputValue">Buscar Pokemon</label>
            </form>
          </div>
          <div className="col-1"></div>
        </div>
      </div>
    );
  }
}

export default PokemonSearch;
