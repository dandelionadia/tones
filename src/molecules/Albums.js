import React from 'react'
import { Composition, Box } from 'atomic-layout'
import styled from 'styled-components'
import Text from '../atoms/Text'

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  background-size: cover;
`

const StyledContainerImg = styled.div`
  background-color: #000;
  padding: 5px;
  width: 100%;
  height: 100%;
  overflowe: hidden;
`

const Albums = ({ data }) => {
  return (
    <Composition
      templateCols="1fr 1fr"
      templateColsSm="1fr 1fr 1fr"
      templateColsMd="1fr 1fr 1fr 1fr"
      templateColsLg="repeat(auto-fill, minmax(150px, 1fr))"
      gap={2}
      padding={1}
    >
      {data.map(album => (
        <Box>
          <StyledContainerImg>
            <StyledImage src={album.src} alt="img" />
          </StyledContainerImg>
          <Text margin>{album.nameAlbum}</Text>
          <Text colorGrey>{album.artist}</Text>
        </Box>
      ))}
    </Composition>
  )
}

export default Albums
