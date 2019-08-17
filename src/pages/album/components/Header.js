import React from 'react'
import { Composition } from 'atomic-layout'
import Icons from '../atoms/Icons'
import Titles from '../atoms/Titles'

const areasMobile = `
  image titles titles
  image info info
  image button icons
  / 150px auto 1fr
`

const areasLg = `
  image
  titles
  button
  info
  icons
`

function Header() {
  return (
    <Composition template={areasMobile} areasLg={areasLg} gap={2}>
      {Areas => (
        <>
          <Areas.Image>image</Areas.Image>
          <Areas.Titles>
            <Titles />
          </Areas.Titles>
          <Areas.Info>info</Areas.Info>
          <Areas.Button>buttons</Areas.Button>
          <Areas.Icons>
            <Icons />
          </Areas.Icons>
        </>
      )}
    </Composition>
  )
}

export default Header
