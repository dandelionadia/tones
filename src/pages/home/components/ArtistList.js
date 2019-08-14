import React from 'react'
import { Composition } from 'atomic-layout'
import Artist from '../atoms/Artist'

const ArtistList = ({ data }) => {
  return (
    <Composition templateCols="repeat(auto-fill, minmax(150px, 1fr))" gap={2}>
      {data.map(item => (
        <Artist name={item.name} />
      ))}
    </Composition>
  )
}

export default ArtistList
