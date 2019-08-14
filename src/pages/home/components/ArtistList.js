import React from 'react'
import { Composition } from 'atomic-layout'
import Artist from '../atoms/Artist'

const ArtistList = ({ data }) => {
  return (
    <Composition templateCols="repeat(auto-fill, minmax(160px, 1fr))" gap={2}>
      {data.map(item => (
        <Artist name={item.name} artistId={item.id} src={item.src} />
      ))}
    </Composition>
  )
}

export default ArtistList
