import React from 'react'
import { Composition } from 'atomic-layout'
import Song from './Song'

const SongList = props => (
  <Composition gap="6px">
    {props.list.map(song => (
      <Song
        imageUrl={song.imageUrl}
        title={song.title}
        duration={song.duration}
      />
    ))}
  </Composition>
)

export default SongList
