import React from 'react'
import logo from './logo.svg'
import './App.css'
import Button from './atoms/Button'
import Heading from './atoms/Heading'
import Text from './atoms/Text'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    font-size: 14px;
  }
`

function App() {
  return (
    <div className="App">
      <GlobalStyle />
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

        <Text basis>nnn</Text>
        <Text small>Small</Text>
        <Text lead>Lead</Text>

        <Heading as="h1">title</Heading>
        <Heading as="h2">title</Heading>
        <Heading as="h3">title</Heading>
      </header>
    </div>
  )
}

export default App
