import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import { Overview } from './components/Overview'
import { Related } from './components/Related'
import { About } from './components/About'
import styled from 'styled-components'

const StyledArtist = styled.div`
  text-align: center;
`

const Artist = () => (
  <StyledArtist>
    <Header />
    <Switch>
      <Route path="/artist" exact component={Overview} />
      <Route path="/artist/related" component={Related} />
      <Route path="/artist/about" component={About} />
    </Switch>
  </StyledArtist>
)

export default Artist
