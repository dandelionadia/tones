import React, { useState, useEffect } from 'react'
import { Composition } from 'atomic-layout'
import styled from 'styled-components'
import Grid from '../../atoms/Grid'
import Header from './components/Header'
import Layout from 'atomic-layout'
import SongList from '../../molecules/SongList'

const areasMobile = `
	header
	content
`

const templateLg = `
  header content
  / 20% auto
`

const StyledHeader = styled.div`
  @media (min-width: ${Layout.breakpoints.lg.minWidth}) {
    text-align: center;
  }
`

const Album = ({ match }) => {
  const [album, setAlbum] = useState(null)
  const { albumId } = match.params

  useEffect(() => {
    fetch(`https://spotify-proxy-57097.herokuapp.com/v1/albums/${albumId}`)
      .then(response => response.json())
      .then(json => {
        setAlbum(json)
      })
  }, [albumId])

  if (!album) {
    return <p>Loading...</p>
  }

  return (
    <Grid>
      <Composition
        areas={areasMobile}
        templateLg={templateLg}
        gap={2}
        marginTop={2}
      >
        {Areas => (
          <>
            <Areas.Header as={StyledHeader}>
              <Header data={album} />
            </Areas.Header>
            <Areas.Content>
              <SongList list={album.tracks.items} />
            </Areas.Content>
          </>
        )}
      </Composition>
    </Grid>
  )
}

export default Album
