import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import { Overview } from './components/Overview'
import { Related } from './components/Related'
import { About } from './components/About'

const Artist = () => (
  <div>
    <Header />
    <Switch>
      <Route path="/artist" exact component={Overview} />
      <Route path="/artist/related" component={Related} />
      <Route path="/artist/about" component={About} />
    </Switch>
  </div>
)

export default Artist
