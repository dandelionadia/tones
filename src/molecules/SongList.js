import React from 'react'
import { Composition } from 'atomic-layout'
import Song from './Song'

class SongList extends React.Component {
  state = {
    //початковий стан id
    playingSongId: null
  }

  //player
  componentDidMount() {
    this.player = new Audio()
  }
  //fuction котру викликає onClick і передає як аргумент пісню на яку нажали
  handleSongClick = song => {
    //беремо url кожноі пісні
    const { preview_url } = song

    // якщо пісня на яку ми нажали дорівнює початковому id пісні то виконай що в месередині а ні то перейди на нищу дію за межами if
    if (song.id === this.state.playingSongId) {
      this.setState({
        //змінити стан id
        playingSongId: null
      })
      //вимкнути пісню
      this.player.pause()
      //закінчити function
      return
    }

    this.setState(
      {
        //змінити стан id на id нажатоі пісні
        playingSongId: song.id
      },
      () => {
        //викликаємо пдеєр і пердаємо йому url нажатоі пісні
        this.player.src = preview_url
        //граємо пісню
        this.player.play()
      }
    )
    console.log({ preview_url })
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
              onClick={() => this.handleSongClick(song)}
            />
          )
        })}
      </Composition>
    )
  }
}

export default SongList
