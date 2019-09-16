import React, { useState } from 'react'
import { Composition } from 'atomic-layout'
import styled from 'styled-components'
import { IoIosMusicalNote, IoIosPlay, IoIosPause } from 'react-icons/io'
import Text from '../atoms/Text'

const areasFull = `
	icon thumbnail content meta
	/ auto 50px 1fr
`

const areasPlain = `
	icon content meta
	/ auto 1fr
`

const StyledSong = styled.div`
  background-color: ${({ isHover, isActive }) =>
    isHover || isActive ? 'rgba(0,0,0,1)' : 'null'};
  color: ${({ isActive }) => isActive && '#1ed760'};
`

function getIcon(isHover, isActive, isPlaying) {
  if (isActive) {
    return isPlaying ? IoIosPause : IoIosPlay
  }

  if (isHover) {
    return IoIosPlay
  }

  return IoIosMusicalNote
}

const Song = ({
  imageUrl,
  title,
  duration,
  artist,
  onPlayClick,
  isActive,
  isPlaying
}) => {
  const [isHover, setIsHover] = useState(false)
  const PlayIcon = getIcon(isHover, isActive, isPlaying)

  return (
    <Composition
      template={imageUrl ? areasFull : areasPlain}
      gap={1}
      alignItems="center"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      as={StyledSong}
      isHover={isHover}
      isActive={isActive}
      paddingVertical={0.8}
      paddingHorizontal={1}
    >
      {({ Icon, Thumbnail, Content, Meta }) => (
        <>
          <Icon>
            <PlayIcon
              fill={isActive ? '#1ed760' : '#b3b3b3'}
              onClick={onPlayClick}
            />
          </Icon>
          {imageUrl && (
            <Thumbnail>
              <img src={imageUrl} alt={title} onClick={onPlayClick} />
            </Thumbnail>
          )}
          <Content>
            <Text big>{title}</Text>
            {artist && <Text colorGrey>{artist.name}</Text>}
          </Content>
          <Meta paddingRight={0.5}>
            <Text colorGrey color={isActive && 'green'}>
              {duration}
            </Text>
          </Meta>
        </>
      )}
    </Composition>
  )
}

export default Song
