import React from 'react'
import './App.css'
import { createGlobalStyle } from 'styled-components'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Artist from './pages/Artist'

const GlobalStyle = createGlobalStyle`
  body {
    font-size: 14px;
    background-color: #222;
    color: ${({ theme }) => theme.colors.white};
  }

  a {
    text-decoration: none;
  }
`

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path="/artist" component={Artist} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
