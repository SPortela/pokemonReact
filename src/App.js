import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import Pokedex from "./pages/pokedex";
import configureStore from "./store";

const store = configureStore();
function App() {
  return (
    <Provider store={store}>
      <Pokedex />
    </Provider>
  );
}

export default App;
