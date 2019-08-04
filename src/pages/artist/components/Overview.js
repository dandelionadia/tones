import React from 'react'
import Albums from '../../../molecules/Albums'
import Heading from '../../../atoms/Heading'
import { Box } from 'atomic-layout'
import Grid from '../../../atoms/Grid'
import SongList from '../../../molecules/SongList'

const albums = [
  {
    src: 'https://satyr.io/400x400/1',
    nameAlbum: 'Hybrid Theory Live Around the World',
    artist: 'Linkin Park'
  },
  {
    src: 'https://satyr.io/400x400/2',
    nameAlbum: 'Meteora Live Around the World',
    artist: 'Linkin Park'
  },
  {
    src: 'https://satyr.io/400x400/3',
    nameAlbum: 'Hybrid Theory Live Around the World',
    artist: 'Linkin Park'
  },
  {
    src: 'https://satyr.io/400x400/4',
    nameAlbum: 'Meteora Live Around the World',
    artist: 'Linkin Park'
  },
  {
    src: 'https://satyr.io/400x400/5',
    nameAlbum: 'Hybrid Theory Live Around the World',
    artist: 'Linkin Park'
  },
  {
    src: 'https://satyr.io/400x400/6',
    nameAlbum: 'Meteora Live Around the World',
    artist: 'Linkin Park'
  },
  {
    src: 'https://satyr.io/400x400/7',
    nameAlbum: 'Hybrid Theory Live Around the World',
    artist: 'Linkin Park'
  },
  {
    src: 'https://satyr.io/400x400/8',
    nameAlbum: 'Meteora Live Around the World',
    artist: 'Linkin Park'
  }
]

const singles = [
  {
    src: 'https://satyr.io/400x400/1',
    nameAlbum: 'Hybrid Theory Live Around the World',
    artist: 'Linkin Park'
  },
  {
    src: 'https://satyr.io/400x400/2',
    nameAlbum: 'Meteora Live Around the World',
    artist: 'Linkin Park'
  },
  {
    src: 'https://satyr.io/400x400/3',
    nameAlbum: 'Hybrid Theory Live Around the World',
    artist: 'Linkin Park'
  },
  {
    src: 'https://satyr.io/400x400/4',
    nameAlbum: 'Meteora Live Around the World',
    artist: 'Linkin Park'
  },
  {
    src: 'https://satyr.io/400x400/5',
    nameAlbum: 'Hybrid Theory Live Around the World',
    artist: 'Linkin Park'
  },
  {
    src: 'https://satyr.io/400x400/6',
    nameAlbum: 'Meteora Live Around the World',
    artist: 'Linkin Park'
  },
  {
    src: 'https://satyr.io/400x400/7',
    nameAlbum: 'Hybrid Theory Live Around the World',
    artist: 'Linkin Park'
  },
  {
    src: 'https://satyr.io/400x400/8',
    nameAlbum: 'Meteora Live Around the World',
    artist: 'Linkin Park'
  }
]

const appearsOn = [
  {
    src: 'https://satyr.io/400x400/1',
    nameAlbum: 'Hybrid Theory Live Around the World',
    artist: 'Linkin Park'
  },
  {
    src: 'https://satyr.io/400x400/2',
    nameAlbum: 'Meteora Live Around the World',
    artist: 'Linkin Park'
  },
  {
    src: 'https://satyr.io/400x400/3',
    nameAlbum: 'Hybrid Theory Live Around the World',
    artist: 'Linkin Park'
  }
]

const popularSongs = [
  {
    imageUrl:
      'https://i.scdn.co/image/78a2c6dcc4928bbc9ee4b3480eb096d362e60fbf',
    title: 'In the End',
    duration: '3:25'
  },
  {
    imageUrl:
      'https://i.scdn.co/image/c03090e1f4b09d79fd41855023460c02e13993a8',
    title: 'In the End',
    duration: '3:25'
  }
]

class Overview extends React.Component {
  render() {
    return (
      <Grid>
        <Box paddingTop={1} paddingBottom={1}>
          <Heading>Popular</Heading>
          <SongList list={popularSongs} />
        </Box>
        <Box paddingTop={1} paddingBottom={1}>
          <Heading>Albums</Heading>
          <Albums data={albums} />
        </Box>
        <Box paddingTop={1} paddingBottom={1}>
          <Heading>Singles</Heading>
          <Albums data={singles} />
        </Box>
        <Box paddingTop={1} paddingBottom={1}>
          <Heading>Appears On</Heading>
          <Albums data={appearsOn} />
        </Box>
      </Grid>
    )
  }
}

export { Overview }
