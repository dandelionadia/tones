import React from 'react'
import { Composition } from 'atomic-layout'
import Song from './Song'

const SongList = ({ list }) => (
  <Composition gap="6px">
    {list.slice(0, 5).map(song => {
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
          imageUrl={song.album && song.album.images[2].url}
          title={song.name}
          duration={duration}
          artist={song.artists && song.artists[0]}
        />
      )
    })}
  </Composition>
)

export default SongList
