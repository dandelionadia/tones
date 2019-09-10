import React from 'react'
import { Composition } from 'atomic-layout'
import Song from './Song'

class SongList extends React.Component {
  state = {
    isSongClick: false
  }

  handleSongClick = () => {
    const isSongClick = this.state.isSongClick
    this.setState({
      isSongClick: !isSongClick
    })
    console.log('ok!')
  }

  render() {
    const { list } = this.props

    return (
      <Composition gap="6px">
        {list.map(song => {
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
              onClick={this.handleSongClick}
            />
          )
        })}
      </Composition>
    )
  }
}

export default SongList
