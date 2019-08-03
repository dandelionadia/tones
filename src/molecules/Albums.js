import React from 'react'
import { Composition, Box } from 'atomic-layout'
import styled from 'styled-components'
import Text from '../atoms/Text'

const StyledImgContainer = styled.div`
  background-color: #000;
  padding: 5px;
  width: 100%;
  overflow: hidden;
`

const Albums = ({ data }) => {
  return (
    <Composition
      templateCols="repeat(2, 1fr)"
      templateColsSm="repeat(3, 1fr)"
      templateColsMd="repear(4, 1fr)"
      templateColsLg="repeat(auto-fill, minmax(150px, 1fr))"
      gap={2}
      padding={1}
    >
      {data.map(album => (
        <Box>
          <StyledImgContainer>
            <img src={album.src} alt="img" />
          </StyledImgContainer>
          <Text margin>{album.nameAlbum}</Text>
          <Text colorGrey>{album.artist}</Text>
        </Box>
      ))}
    </Composition>
  )
}

export default Albums
