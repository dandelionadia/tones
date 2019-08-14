import React from 'react'
import { Composition, Box } from 'atomic-layout'
import styled from 'styled-components'
import Text from '../atoms/Text'

const StyledImgContainer = styled.div`
  border: 5px solid #000;
  width: 100%;
  overflow: hidden;
  box-sizing: border-box;
`

const Albums = ({ data }) => {
  return (
    <Composition
      templateCols="repeat(2, 1fr)"
      templateColsSm="repeat(3, 1fr)"
      templateColsMd="repear(4, 1fr)"
      templateColsLg="repeat(auto-fill, minmax(150px, 1fr))"
      gap={2}
    >
      {data.map(album => (
        <Box marginBottom={2}>
          <StyledImgContainer>
            <img src={album.images[1].url} alt={album.name} />
          </StyledImgContainer>
          <Text margin>{album.name}</Text>
          <Text colorGrey>{album.artists[0].name}</Text>
        </Box>
      ))}
    </Composition>
  )
}

export default Albums
