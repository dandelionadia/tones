import React from 'react'
import { Composition } from 'atomic-layout'

const areasMobile = `
	icon thumbnail content meta
	/ auto 50px 1fr
`

const Song = () => {
  return (
    <Composition template={areasMobile} gap={1} alignItems="center">
      {({ Icon, Thumbnail, Content, Meta }) => (
        <>
          <Icon>Icon</Icon>
          <Thumbnail>2</Thumbnail>
          <Content>Content</Content>
          <Meta>Meta</Meta>
        </>
      )}
    </Composition>
  )
}

export default Song
