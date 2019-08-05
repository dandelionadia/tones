import React from 'react'
import Albums from '../../../molecules/Albums'
import Heading from '../../../atoms/Heading'
import { Box } from 'atomic-layout'
import Grid from '../../../atoms/Grid'
import SongList from '../../../molecules/SongList'
import ShowMoreButton from '../../../atoms/ShowMoreButton'
import Text from '../../../atoms/Text'
import { IoIosArrowDown } from 'react-icons/io'

const albums = [
  {
    imageUrl: 'https://satyr.io/400x400/1',
    name: 'Hybrid Theory Live Around the World',
    artist: 'Linkin Park'
  },
  {
    imageUrl: 'https://satyr.io/400x400/2',
    name: 'Meteora Live Around the World',
    artist: 'Linkin Park'
  },
  {
    imageUrl: 'https://satyr.io/400x400/3',
    name: 'Hybrid Theory Live Around the World',
    artist: 'Linkin Park'
  },
  {
    imageUrl: 'https://satyr.io/400x400/4',
    name: 'Meteora Live Around the World',
    artist: 'Linkin Park'
  },
  {
    imageUrl: 'https://satyr.io/400x400/5',
    name: 'Hybrid Theory Live Around the World',
    artist: 'Linkin Park'
  },
  {
    imageUrl: 'https://satyr.io/400x400/6',
    name: 'Meteora Live Around the World',
    artist: 'Linkin Park'
  },
  {
    imageUrl: 'https://satyr.io/400x400/7',
    name: 'Hybrid Theory Live Around the World',
    artist: 'Linkin Park'
  },
  {
    imageUrl: 'https://satyr.io/400x400/8',
    name: 'Meteora Live Around the World',
    artist: 'Linkin Park'
  }
]

const singles = [
  {
    imageUrl: 'https://satyr.io/400x400/1',
    name: 'Hybrid Theory Live Around the World',
    artist: 'Linkin Park'
  },
  {
    imageUrl: 'https://satyr.io/400x400/2',
    name: 'Meteora Live Around the World',
    artist: 'Linkin Park'
  },
  {
    imageUrl: 'https://satyr.io/400x400/3',
    name: 'Hybrid Theory Live Around the World',
    artist: 'Linkin Park'
  },
  {
    imageUrl: 'https://satyr.io/400x400/4',
    name: 'Meteora Live Around the World',
    artist: 'Linkin Park'
  },
  {
    imageUrl: 'https://satyr.io/400x400/5',
    name: 'Hybrid Theory Live Around the World',
    artist: 'Linkin Park'
  },
  {
    imageUrl: 'https://satyr.io/400x400/6',
    name: 'Meteora Live Around the World',
    artist: 'Linkin Park'
  },
  {
    imageUrl: 'https://satyr.io/400x400/7',
    name: 'Hybrid Theory Live Around the World',
    artist: 'Linkin Park'
  },
  {
    imageUrl: 'https://satyr.io/400x400/8',
    name: 'Meteora Live Around the World',
    artist: 'Linkin Park'
  }
]

const appearsOn = [
  {
    imageUrl: 'https://satyr.io/400x400/1',
    name: 'Hybrid Theory Live Around the World',
    artist: 'Linkin Park'
  },
  {
    imageUrl: 'https://satyr.io/400x400/2',
    name: 'Meteora Live Around the World',
    artist: 'Linkin Park'
  },
  {
    imageUrl: 'https://satyr.io/400x400/3',
    name: 'Hybrid Theory Live Around the World',
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
    title: 'Numb',
    duration: '3:05'
  },
  {
    imageUrl:
      'https://i.scdn.co/image/78a2c6dcc4928bbc9ee4b3480eb096d362e60fbf',
    title: 'In the End',
    duration: '3:25'
  },
  {
    imageUrl:
      'https://i.scdn.co/image/c03090e1f4b09d79fd41855023460c02e13993a8',
    title: 'Numb',
    duration: '3:05'
  },
  {
    imageUrl:
      'https://i.scdn.co/image/78a2c6dcc4928bbc9ee4b3480eb096d362e60fbf',
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
          <Box flex justifyContent="center">
            <ShowMoreButton>
              <Text as="span" small letterSpacing>
                show more
              </Text>
              <IoIosArrowDown size={25} />
            </ShowMoreButton>
          </Box>
        </Box>
        <Box paddingTop={1} paddingBottom={1}>
          <Heading>Singles</Heading>
          <Albums data={singles} />
          <Box flex justifyContent="center">
            <ShowMoreButton>
              <Text as="span" small letterSpacing>
                show more
              </Text>
              <IoIosArrowDown size={25} />
            </ShowMoreButton>
          </Box>
        </Box>
        <Box paddingTop={1} paddingBottom={1}>
          <Heading>Appears On</Heading>
          <Albums data={appearsOn} />
          <Box flex justifyContent="center">
            <ShowMoreButton>
              <Text as="span" small letterSpacing>
                show more
              </Text>
              <IoIosArrowDown size={25} />
            </ShowMoreButton>
          </Box>
        </Box>
      </Grid>
    )
  }
}

export { Overview }
