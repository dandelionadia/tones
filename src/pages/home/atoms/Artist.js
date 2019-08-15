import React from 'react'
import { Composition } from 'atomic-layout'
import styled from 'styled-components'
import Text from '../../../atoms/Text'
import { Link } from 'react-router-dom'

const StyledImageContainer = styled.div`
  width: 100%;
  heght: auto;
  border-radius: 50%;
  overflow: hidden;
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
          <Areas.Img as={StyledImageContainer}>
            <img src={src} alt="img" />
          </Areas.Img>
          <Areas.Text as={Text} margin tetxCenter colorWhite>
            {name}
          </Areas.Text>
        </Link>
      )}
    </Composition>
  )
}

export default Artist
