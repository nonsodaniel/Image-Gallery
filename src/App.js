import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import Home from "./components/Home/Home";


class App extends Component {
  state = {};

  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Home />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
