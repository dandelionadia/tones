import React from 'react'
import Albums from '../../../molecules/Albums'
import Heading from '../../../atoms/Heading'
import { Box } from 'atomic-layout'

const albums = [
  {
    src: 'https://satyr.io/400x400',
    nameAlbum: 'Hybrid Theory Live Around the World',
    artist: 'Linkin Park'
  },
  {
    src: 'https://satyr.io/400x400',
    nameAlbum: 'Meteora Live Around the World',
    artist: 'Linkin Park'
  },
  {
    src: 'https://satyr.io/400x400',
    nameAlbum: 'Hybrid Theory Live Around the World',
    artist: 'Linkin Park'
  },
  {
    src: 'https://satyr.io/400x400',
    nameAlbum: 'Meteora Live Around the World',
    artist: 'Linkin Park'
  },
  {
    src: 'https://satyr.io/400x400',
    nameAlbum: 'Hybrid Theory Live Around the World',
    artist: 'Linkin Park'
  },
  {
    src: 'https://satyr.io/400x400',
    nameAlbum: 'Meteora Live Around the World',
    artist: 'Linkin Park'
  },
  {
    src: 'https://satyr.io/400x400',
    nameAlbum: 'Hybrid Theory Live Around the World',
    artist: 'Linkin Park'
  },
  {
    src: 'https://satyr.io/400x400',
    nameAlbum: 'Meteora Live Around the World',
    artist: 'Linkin Park'
  }
]

const singles = [
  {
    src:
      'https://media.wired.com/photos/5bac2b22b1d78f2d745782f2/master/pass/catrat-82773559.jpg',
    nameAlbum: 'Hybrid Theory Live Around the World',
    artist: 'Linkin Park'
  },
  {
    src:
      'https://media.wired.com/photos/5bac2b22b1d78f2d745782f2/master/pass/catrat-82773559.jpg',
    nameAlbum: 'Meteora Live Around the World',
    artist: 'Linkin Park'
  },
  {
    src:
      'https://media.wired.com/photos/5bac2b22b1d78f2d745782f2/master/pass/catrat-82773559.jpg',
    nameAlbum: 'Hybrid Theory Live Around the World',
    artist: 'Linkin Park'
  },
  {
    src:
      'https://media.wired.com/photos/5bac2b22b1d78f2d745782f2/master/pass/catrat-82773559.jpg',
    nameAlbum: 'Meteora Live Around the World',
    artist: 'Linkin Park'
  },
  {
    src:
      'https://media.wired.com/photos/5bac2b22b1d78f2d745782f2/master/pass/catrat-82773559.jpg',
    nameAlbum: 'Hybrid Theory Live Around the World',
    artist: 'Linkin Park'
  },
  {
    src:
      'https://media.wired.com/photos/5bac2b22b1d78f2d745782f2/master/pass/catrat-82773559.jpg',
    nameAlbum: 'Meteora Live Around the World',
    artist: 'Linkin Park'
  },
  {
    src:
      'https://media.wired.com/photos/5bac2b22b1d78f2d745782f2/master/pass/catrat-82773559.jpg',
    nameAlbum: 'Hybrid Theory Live Around the World',
    artist: 'Linkin Park'
  },
  {
    src:
      'https://media.wired.com/photos/5bac2b22b1d78f2d745782f2/master/pass/catrat-82773559.jpg',
    nameAlbum: 'Meteora Live Around the World',
    artist: 'Linkin Park'
  }
]

const appearsOn = [
  {
    src:
      'https://st2.depositphotos.com/2780829/7647/v/950/depositphotos_76471161-stock-illustration-vector-landscape-flat-style.jpg',
    nameAlbum: 'Hybrid Theory Live Around the World',
    artist: 'Linkin Park'
  },
  {
    src:
      'https://st2.depositphotos.com/2780829/7647/v/950/depositphotos_76471161-stock-illustration-vector-landscape-flat-style.jpg',
    nameAlbum: 'Meteora Live Around the World',
    artist: 'Linkin Park'
  },
  {
    src:
      'https://st2.depositphotos.com/2780829/7647/v/950/depositphotos_76471161-stock-illustration-vector-landscape-flat-style.jpg',
    nameAlbum: 'Hybrid Theory Live Around the World',
    artist: 'Linkin Park'
  }
]

class Overview extends React.Component {
  render() {
    return (
      <>
        <Box padding={1}>
          <Heading left>Albums</Heading>
          <Albums data={albums} />
        </Box>
        <Box padding={1}>
          <Heading left>Singles</Heading>
          <Albums data={singles} />
        </Box>
        <Box padding={1}>
          <Heading left>Appears On</Heading>
          <Albums data={appearsOn} />
        </Box>
      </>
    )
  }
}

export { Overview }
