import React, { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import { Overview } from './components/Overview'
import { Related } from './components/Related'
import { About } from './components/About'

const Artist = ({ match }) => {
  const [artistData, setArtistData] = useState(null)
  const { artistId } = match.params

  useEffect(() => {
    fetch(`https://spotify-proxy-57097.herokuapp.com/v1/artists/${artistId}`)
      .then(response => response.json())
      .then(json => {
        setArtistData(json)
      })
  }, [artistId])

  if (!artistData) {
    return <p>Loading...</p>
  }

  return (
    <div>
      <Header artistData={artistData} />
      <Switch>
        <Route path={match.path} exact component={Overview} />
        <Route path={`${match.path}/related`} component={Related} />
        <Route path={`${match.path}/about`} component={About} />
      </Switch>
    </div>
  )
}

export default Artist
