import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from '../molecules/Header'
import { Overview } from './Overview'
import { Related } from './Related'
import { About } from './About'

const Artist = () => (
  <>
    <Header />
    <Switch>
      <Route path="/artist" exact component={Overview} />
      <Route path="/artist/related" component={Related} />
      <Route path="/artist/about" component={About} />
    </Switch>
  </>
)

export default Artist
