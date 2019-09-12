import React, { useState } from 'react'
import { Composition } from 'atomic-layout'
import { IoIosMusicalNote, IoIosPlay } from 'react-icons/io'
import Text from '../atoms/Text'

const areasFull = `
	icon thumbnail content meta
	/ auto 50px 1fr
`

const areasPlain = `
	icon content meta
	/ auto 1fr
`

const Song = ({ imageUrl, title, duration, artist, onClick }) => {
  const [isHover, setIsHover] = useState(false)

  return (
    <Composition
      template={imageUrl ? areasFull : areasPlain}
      gap={1}
      alignItems="center"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {({ Icon, Thumbnail, Content, Meta }) => (
        <>
          <Icon>
            {isHover ? (
              <IoIosPlay fill="#b3b3b3" onClick={onClick} />
            ) : (
              <IoIosMusicalNote fill="#b3b3b3" onClick={onClick} />
            )}
          </Icon>
          {imageUrl && (
            <Thumbnail>
              <img src={imageUrl} alt={title} onClick={onClick} />
            </Thumbnail>
          )}
          <Content>
            <Text big>{title}</Text>
            {artist && <Text colorGrey>{artist.name}</Text>}
          </Content>
          <Meta paddingRight={0.5}>
            <Text colorGrey>{duration}</Text>
          </Meta>
        </>
      )}
    </Composition>
  )
}

export default Song
