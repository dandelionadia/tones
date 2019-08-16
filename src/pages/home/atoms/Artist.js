import React from 'react'
import { Composition } from 'atomic-layout'
import styled from 'styled-components'
import Text from '../../../atoms/Text'
import { Link } from 'react-router-dom'

const StyledImageContainer = styled.div`
  width: 100%;
  padding-top: 100%;
  border-radius: 50%;
  overflow: hidden;
  background-image: url('${({ src }) => src}');
  background-size: cover;
  background-position: 50%;
`

const areasMobile = `
	img
	text
`

const Artist = ({ name, artistId, src }) => {
  return (
    <Composition areas={areasMobile}>
      {Areas => (
        <Link to={`/artist/${artistId}`}>
          <Areas.Img as={StyledImageContainer} src={src} />
          <Areas.Text as={Text} margin tetxCenter colorWhite>
            {name}
          </Areas.Text>
        </Link>
      )}
    </Composition>
  )
}

export default Artist
