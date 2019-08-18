import React from 'react'
import { Composition, Only, useResponsiveValue } from 'atomic-layout'
import styled from 'styled-components'
import Icons from '../atoms/Icons'
import Text from '../../../atoms/Text'
import Heading from '../../../atoms/Heading'

const areasMobile = `
  image titles titles
  image info info
  image button icons
  / 150px auto 1fr
`

const templateLg = `
  image
  titles
  button
  info
  icons
  / 200px
`

const StyledImage = styled.img`
  width: 100%;
  height: auto;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);

  @media (min-width: 992px) {
    margin-bottom: 2em;
  }
`

const StyledInfo = styled.div`
  letter-spacing: 0.16em;
  text-transform: uppercase;
  opacity: 0.6;
`

function Header({ data }) {
  const artistLinkColor = useResponsiveValue(
    {
      lg: true
    },
    false
  )

  console.log({ artistLinkColor })

  return (
    <Composition template={areasMobile} templateLg={templateLg} gapCol={2}>
      {Areas => (
        <>
          <Areas.Image>
            <StyledImage src={data.images[0].url} />
          </Areas.Image>
          <Areas.Titles>
            <Heading as="h3">{data.name}</Heading>
            <Only as={Text} to="lg" colorGrey inline textBold>
              By{' '}
            </Only>
            <Text colorGrey={artistLinkColor} inline textBold>
              {data.artists[0].name}
            </Text>
          </Areas.Titles>
          <Areas.Info>
            <StyledInfo>
              <Text small colorGrey>
                {data.release_date} • {data.total_tracks} songs
              </Text>
            </StyledInfo>
          </Areas.Info>
          <Areas.Button align="end">buttons</Areas.Button>
          <Areas.Icons align="end">
            <Icons />
          </Areas.Icons>
        </>
      )}
    </Composition>
  )
}

export default Header
