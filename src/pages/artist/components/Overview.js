import React, { useState, useEffect } from 'react'
import Albums from '../../../molecules/Albums'
import Heading from '../../../atoms/Heading'
import { Box } from 'atomic-layout'
import Grid from '../../../atoms/Grid'
import SongList from '../../../molecules/SongList'
import ShowMoreButton from '../../../atoms/ShowMoreButton'
import Text from '../../../atoms/Text'
import { IoIosArrowDown } from 'react-icons/io'

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

const Overview = ({ match }) => {
  const [topSongs, setTopSongs] = useState(null)
  const [albums, setAlbums] = useState(null)
  const { artistId } = match.params

  useEffect(() => {
    fetch(
      `https://spotify-proxy-57097.herokuapp.com/v1/artists/${artistId}/top-tracks?country=CZ`
    )
      .then(response => response.json())
      .then(json => {
        setTopSongs(json)
      })

    fetch(
      `https://spotify-proxy-57097.herokuapp.com/v1/artists/${artistId}/albums`
    )
      .then(response => response.json())
      .then(json => {
        setAlbums(json)
      })
  }, [artistId])

  if (!topSongs || !albums) {
    return <p>Loading...</p>
  }

  console.log(albums)
  // console.log(topSongs)

  return (
    <Grid>
      <Box paddingTop={1} paddingBottom={1}>
        <Heading>Popular</Heading>
        <SongList list={topSongs.tracks} />
      </Box>
      <Box paddingTop={1} paddingBottom={1}>
        <Heading>Albums</Heading>
        <Albums data={albums.items} />
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
        {/* <Albums data={singles} /> */}
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
        {/* <Albums data={appearsOn} /> */}
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

export { Overview }
