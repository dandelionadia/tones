import React from 'react'
import './App.css'
import Header from './molecules/Header'
import { createGlobalStyle } from 'styled-components'
import { Box } from 'atomic-layout'
import { Overview } from './pages/Overview'
import { Related } from './pages/Related'
import { Artists } from './pages/Artists'
import { About } from './pages/About'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const GlobalStyle = createGlobalStyle`
  body {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.white};
  }
`

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Router>
        <Box>
          <Header />
          <Switch>
            <Route path="/" exact component={Overview} />
            <Route path="/related" component={Related} />
            <Route path="/artists" component={Artists} />
            <Route path="/about" component={About} />
          </Switch>
        </Box>
      </Router>
    </div>
  )
}

export default App
