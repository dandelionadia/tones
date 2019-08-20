import React from 'react'
import { Composition, Only, useResponsiveValue } from 'atomic-layout'
import styled from 'styled-components'
import Button from '../../../atoms/Button'
import Icons from '../atoms/Icons'
import Text from '../../../atoms/Text'
import Heading from '../../../atoms/Heading'

const areasMobile = `
  image titles titles
  image info info
  image button icons
  / 180px auto 1fr
`

const templateLg = `
  image
  titles
  button
  info
  icons
`

const StyledImage = styled.img`
  width: 100%;
  height: auto;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`

const StyledInfo = styled.div`
  letter-spacing: 0.16em;
  text-transform: uppercase;
  opacity: 0.6;
`

const AlbumName = styled(Heading)`
  margin-bottom: 0.3rem;
`

const StyledButton = styled(Button)`
  min-width: 130px;
  margin: 0;
`

function Header({ data }) {
  const artistLinkColor = useResponsiveValue(
    {
      lg: true,
      xl: true
    },
    false
  )

  const artistLinkOpacity = useResponsiveValue(
    {
      lg: true,
      xl: true
    },
    false
  )

  return (
    <Composition
      template={areasMobile}
      templateLg={templateLg}
      gapCol={2}
      gapRow={1}
    >
      {Areas => (
        <>
          <Areas.Image>
            <StyledImage src={data.images[0].url} />
          </Areas.Image>
          <Areas.Titles>
            <AlbumName as="h3">{data.name}</AlbumName>
            <Only as={Text} to="lg" colorGrey inline textBold muted>
              By{' '}
            </Only>
            <Text
              colorGrey={artistLinkColor}
              inline
              textBold
              muted={artistLinkOpacity}
            >
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
          <Areas.Button align="end" marginTop={1}>
            <StyledButton kind="primary">play</StyledButton>
          </Areas.Button>
          <Areas.Icons align="end" marginTopLg={1.5}>
            <Icons />
          </Areas.Icons>
        </>
      )}
    </Composition>
  )
}

export default Header
