import React from 'react'
import { createGlobalStyle } from 'styled-components'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
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
          <Route
            path="/"
            exact
            render={() => <Redirect to="/artist/6XyY86QOPPrYVGvF9ch6wz" />}
          />
          <Route path="/artist/:artistId" component={Index} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
