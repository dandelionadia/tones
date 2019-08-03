import React from 'react'
import Albums from '../../../molecules/Albums'
import Song from '../../../molecules/Song'
import Heading from '../../../atoms/Heading'
import { Box } from 'atomic-layout'

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

class Overview extends React.Component {
  render() {
    return (
      <>
        <Box padding={1}>
          <Heading>Popular</Heading>
          <Song />
        </Box>
        <Box padding={1}>
          <Heading>Albums</Heading>
          <Albums data={albums} />
        </Box>
        <Box padding={1}>
          <Heading>Singles</Heading>
          <Albums data={singles} />
        </Box>
        <Box padding={1}>
          <Heading>Appears On</Heading>
          <Albums data={appearsOn} />
        </Box>
      </>
    )
  }
}

export { Overview }
