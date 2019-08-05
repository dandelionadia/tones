import React from 'react'
import { Composition } from 'atomic-layout'
import { IoIosMusicalNote } from 'react-icons/io'
import Text from '../atoms/Text'

const areasMobile = `
	icon thumbnail content meta
	/ auto 50px 1fr
`

const Song = ({ imageUrl, title, duration }) => {
  return (
    <Composition template={areasMobile} gap={1} alignItems="center">
      {({ Icon, Thumbnail, Content, Meta }) => (
        <>
          <Icon>
            <IoIosMusicalNote fill="#b3b3b3" />
          </Icon>
          <Thumbnail>
            <img src={imageUrl} alt={title} />
          </Thumbnail>
          <Content>
            <Text big>{title}</Text>
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
