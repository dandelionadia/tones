import React from 'react'
import { Composition } from 'atomic-layout'
import styled from 'styled-components'
import Text from '../../../atoms/Text'

const SryledImageContainer = styled.div`
  width: 100%;
  border-radius: 50%;
  overflow: hidden;
`

const areasMobile = `
	img
	text
`

const Artist = ({ name }) => {
  return (
    <Composition areas={areasMobile}>
      {Areas => (
        <>
          <Areas.Img as={SryledImageContainer}>
            <img src="null" alt="img" />
          </Areas.Img>
          <Areas.Text as={Text}>{name}</Areas.Text>
        </>
      )}
    </Composition>
  )
}

export default Artist
