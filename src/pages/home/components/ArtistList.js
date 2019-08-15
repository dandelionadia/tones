import React from 'react'
import { Composition } from 'atomic-layout'
import styled from 'styled-components'
import Artist from '../atoms/Artist'

const StyledArtistList = styled.div`
  margin: 2rem 0;
`

const ArtistList = ({ data }) => {
  return (
    <Composition
      templateCols="repeat(auto-fill, minmax(160px, 1fr))"
      gap={2}
      as={StyledArtistList}
    >
      {data.map(item => (
        <Artist
          name={item.name}
          artistId={item.id}
          src={item.src}
          key={item.id}
        />
      ))}
    </Composition>
  )
}

export default ArtistList
