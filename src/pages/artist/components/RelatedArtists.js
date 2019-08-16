import React, { useState, useEffect } from 'react'
import Artist from '../../../atoms/Artist'
import { Composition } from 'atomic-layout'
import styled from 'styled-components'
import Grid from '../../../atoms/Grid'

const StyledArtistList = styled.div`
  margin: 2rem 0;
`

function RelatedArtists({ match }) {
  const [relatedArtist, setRelatedArtist] = useState(null)
  const { artistId } = match.params

  useEffect(() => {
    fetch(
      `https://spotify-proxy-57097.herokuapp.com/v1/artists/${artistId}/related-artists`
    )
      .then(response => response.json())
      .then(json => {
        setRelatedArtist(json)
      })
  }, [artistId])

  if (!relatedArtist) {
    return <p>Loading...</p>
  }
  console.log(relatedArtist)

  return (
    <Grid>
      <Composition
        templateCols="repeat(auto-fill, minmax(160px, 1fr))"
        gap={2}
        as={StyledArtistList}
      >
        {relatedArtist.artists.map(artistData => (
          <Artist
            name={artistData.name}
            artistId={artistData.id}
            src={artistData.images[0].url}
            key={artistData.id}
          />
        ))}
      </Composition>
    </Grid>
  )
}

export { RelatedArtists }
