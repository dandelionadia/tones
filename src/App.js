import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Composition } from 'atomic-layout'
import Index from './pages/artist/Index'
import Home from './pages/home/Home'
import Album from './pages/album/Album'
import NawBar from './molecules/NawBar'
import MenuMobile from './atoms/MenuMobile'

const areaMobile = `
  menuMobile
  content
  / auto
`

const areaMd = `
  navBar content
  / 230px auto
`

const GlobalStyle = createGlobalStyle`
  body {
    font-size: 14px;
    background-color: ${({ theme }) => theme.colors.greyDark};
    color: ${({ theme }) => theme.colors.white};
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.white};
  }

  img {
    display: flex;
    max-width: 100%;
    height: auto;
  }
`

const App = () => {
  return (
    <Composition template={areaMobile} templateMd={areaMd}>
      {Areas => (
        <>
          <GlobalStyle />
          <Router>
            <Areas.MenuMobile>
              <MenuMobile />
            </Areas.MenuMobile>
            <Areas.NavBar>
              <NawBar />
            </Areas.NavBar>
            <Areas.Content>
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/artist/:artistId" component={Index} />
                <Route path="/album/:albumId" component={Album} />
              </Switch>
            </Areas.Content>
          </Router>
        </>
      )}
    </Composition>
  )
}

export default App
