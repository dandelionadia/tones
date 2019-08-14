import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Index from './pages/artist/Index'
import Home from './pages/home/Home'

const GlobalStyle = createGlobalStyle`
  body {
    font-size: 14px;
    background-color: ${({ theme }) => theme.colors.greyDark};
    color: ${({ theme }) => theme.colors.white};
  }

  a {
    text-decoration: none;
  }

  img {
    display: flex;
    max-width: 100%;
    height: auto;
  }
`

function App() {
  return (
    <div>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/artist/:artistId" component={Index} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
