import React, { Component } from "react";

import { CustomComponent } from "./CustomComponent";
import { CustomComponentWithProps } from "./CustomComponentWithProps";
// import AddButton from "shared/add-button/add-button";

import "./App.css";
import logo from "./logo.svg";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <CustomComponent />
        <CustomComponentWithProps name1={"Nikolai"} />
        {/* Add button: <AddButton /> */}
      </div>
    );
  }
}

export default App;
