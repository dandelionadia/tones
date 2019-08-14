import React from 'react'
import Heading from '../../atoms/Heading'
import Grid from '../../atoms/Grid'
import ArtistList from './components/ArtistList'

const artistLink = [
  {
    name: 'Linkin Park'
  },
  {
    name: 'Of Monsters and Men'
  }
]

const Home = () => {
  return (
    <Grid>
      <Heading>Artist</Heading>
      <ArtistList data={artistLink} />
    </Grid>
  )
}

export default Home
