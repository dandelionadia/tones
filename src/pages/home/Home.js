import React from 'react'
import { Composition } from 'atomic-layout'
import styled from 'styled-components'
import Heading from '../../atoms/Heading'
import Grid from '../../atoms/Grid'
import ArtistList from './components/ArtistList'
import Text from '../../atoms/Text'

const artistLink = [
  {
    name: 'Led Zeppelin',
    id: '36QJpDe2go2KgaRleHCDTp',
    src: 'https://i.scdn.co/image/207803ce008388d3427a685254f9de6a8f61dc2e'
  },
  {
    name: 'Linkin Park',
    id: '6XyY86QOPPrYVGvF9ch6wz',
    src: 'https://i.scdn.co/image/1685533969d5b68cbc630f991e873bd6467f1814'
  },
  {
    name: 'Red Hot Chili Peppers',
    id: '0L8ExT028jH3ddEcZwqJJ5',
    src: 'https://i.scdn.co/image/5b2072e522bf3324019a8c2dc3db20116dff0b87'
  },
  {
    name: 'Bear McCreary',
    id: '2ifvIECHAlEgPMBuBOJ0lG',
    src: 'https://i.scdn.co/image/70a4f307be1a34c8492a99f586ec74b4aaa9aae7'
  },
  {
    name: 'Gustavo Santaolalla',
    id: '4W3fa7tiXGVXl3KilbACqt',
    src: 'https://i.scdn.co/image/073e6d1c243b565ebbdacd8dc9f43ece985f4ad1'
  },
  {
    name: 'Green Day',
    id: '7oPftvlwr6VrsViSDV7fJY',
    src: 'https://i.scdn.co/image/b6a3f82183adb83b6e47cb22afc25724b241d038'
  },
  {
    name: 'My Chemical Romance',
    id: '7FBcuc1gsnv6Y1nwFtNRCb',
    src:
      'https://pbs.twimg.com/profile_images/3351451544/d82ed9e7c92e9f8664fd0a88231b6b41.jpeg'
  }
]

const StyledHome = styled.div`
  background: linear-gradient(0.25turn, #32311f, #090906);
`

const Home = () => {
  return (
    <Composition as={StyledHome} height="100%">
      <Grid>
        <Heading marginTop>Artists</Heading>
        <Text big colorGrey>
          Click on the artist to go to the artist page
        </Text>
        <ArtistList data={artistLink} />
      </Grid>
    </Composition>
  )
}

export default Home
