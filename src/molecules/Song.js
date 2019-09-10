import React from 'react'
import { Composition } from 'atomic-layout'
import { IoIosMusicalNote } from 'react-icons/io'
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
  return (
    <Composition
      template={imageUrl ? areasFull : areasPlain}
      gap={1}
      alignItems="center"
    >
      {({ Icon, Thumbnail, Content, Meta }) => (
        <>
          <Icon>
            <IoIosMusicalNote fill="#b3b3b3" onClick={onClick} />
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
