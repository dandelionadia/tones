import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "./atoms/Button";
import styled from "styled-components";

const RedButton = styled.button`
  background-color: red;
`;

function App() {
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
        <Button>press me foo</Button>
        <Button kind="primary">primary</Button>
      </header>
    </div>
  );
}

export default App;
