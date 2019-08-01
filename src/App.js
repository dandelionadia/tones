import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Index from './pages/artist/Index'

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
    <div>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path="/artist" component={Index} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
