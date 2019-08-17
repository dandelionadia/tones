import React, { useState, useEffect } from 'react'
import { Composition } from 'atomic-layout'
import styled from 'styled-components'
import Grid from '../../atoms/Grid'
import Header from './components/Header'
import Content from './components/Content'

const areasMobile = `
	header
	content
`

const areasLg = `
	header content
`

const StyledContainer = styled.div`
  padding-top: 2rem;
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
        areasLg={areasLg}
        gap={2}
        as={StyledContainer}
      >
        {Areas => (
          <>
            <Areas.Header>
              <Header data={album} />
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
