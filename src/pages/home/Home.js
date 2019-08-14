import React from 'react'
import Heading from '../../atoms/Heading'
import Grid from '../../atoms/Grid'
import ArtistList from './components/ArtistList'

const artistLink = [
  {
    name: 'Linkin Park',
    id:
      'https://spotify-proxy-57097.herokuapp.com/v1/artists/6XyY86QOPPrYVGvF9ch6wz',
    src: 'https://i.scdn.co/image/1685533969d5b68cbc630f991e873bd6467f1814'
  },
  {
    name: 'Of Monsters and Men',
    id:
      'https://spotify-proxy-57097.herokuapp.com/v1/artists/4dwdTW1Lfiq0cM8nBAqIIz',
    src: 'https://i.scdn.co/image/3e38d07dccf32d6b32c1b7768263041ebe5e50c5'
  }
]

const Home = () => {
  return (
    <Grid>
      <Heading marginTop>Artists</Heading>
      <ArtistList data={artistLink} />
    </Grid>
  )
}

export default Home
