import React, { useState, useEffect } from 'react'
import { Composition } from 'atomic-layout'
import Grid from '../../atoms/Grid'
import Header from './components/Header'
import Content from './components/Content'

const areasMobile = `
	header
	content
`

const Album = ({ match }) => {
  const [albums, setAlbums] = useState(null)
  const { albumsId } = match.params

  useEffect(() => {
    fetch(`https://spotify-proxy-57097.herokuapp.com/v1/albums/${albumsId}`)
      .then(response => response.json())
      .then(json => {
        setAlbums(json)
      })
  }, [albumsId])

  if (!albums) {
    return <p>Loading...</p>
  }
  console.log(albums)
  return (
    <Grid>
      <Composition areas={areasMobile} gap={2}>
        {Areas => (
          <>
            <Areas.Header>
              <Header data={albums} />
            </Areas.Header>
            <Areas.Content>
              <Content />
            </Areas.Content>
          </>
        )}
      </Composition>
    </Grid>
  )
}

export default Album
