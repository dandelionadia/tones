import React from 'react'
import { Composition } from 'atomic-layout'
import Song from './Song'

class SongList extends React.Component {
  state = {
    //початковий стан id
    activeSongId: null,
    isAudioPlaying: false
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
    if (song.id === this.state.activeSongId) {
      //якщо пісня на паузі то грай
      if (this.player.paused) {
        this.player.play()
        this.setState({
          isAudioPlaying: true
        })
        //якщо грає то постав на паузу
      } else {
        this.player.pause()
        this.setState({
          isAudioPlaying: false
        })
      }
      //закінчити function
      return
    }

    this.setState(
      {
        //змінити стан id на id нажатоі пісні
        activeSongId: song.id
      },
      () => {
        //викликаємо плеєр і пердаємо йому url нажатоі пісні
        this.player.src = preview_url

        //граємо пісню
        this.player.play()
        this.setState({
          isAudioPlaying: true
        })
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

          const isActive = song.id === this.state.activeSongId

          return (
            <Song
              imageUrl={song.album && song.album.images[2].url}
              title={song.name}
              duration={duration}
              artist={song.artists && song.artists[0]}
              onPlayClick={() => this.handleSongClick(song)}
              isActive={isActive}
              isPlaying={this.state.isAudioPlaying}
            />
          )
        })}
      </Composition>
    )
  }
}

export default SongList
