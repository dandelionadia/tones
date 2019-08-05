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
            <img src={album.imageUrl} alt="img" />
          </StyledImgContainer>
          <Text margin>{album.name}</Text>
          <Text colorGrey>{album.artist}</Text>
        </Box>
      ))}
    </Composition>
  )
}

export default Albums
