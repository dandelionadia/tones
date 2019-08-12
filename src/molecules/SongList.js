import React from 'react'
import { Composition } from 'atomic-layout'
import Song from './Song'

const SongList = props => (
  <Composition gap="6px">
    {props.list.slice(0, 5).map(song => {
      const date = new Date(song.duration_ms)
      const duration =
        date.getMinutes() +
        ':' +
        date
          .getSeconds()
          .toString()
          .padStart(2, '0')

      return (
        <Song
          imageUrl={song.album.images[2].url}
          title={song.name}
          duration={duration}
        />
      )
    })}
  </Composition>
)

export default SongList
