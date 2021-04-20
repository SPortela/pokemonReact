import React from "react";
import "./App.css";
import Pokedex from "./pages/pokedex";
import { Provider } from "react-redux";
import configureStore from './store/index';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <Pokedex />
    </Provider>
  );
}

export default App;
