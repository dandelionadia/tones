import React from 'react'
import { Composition, Box } from 'atomic-layout'
import styled from 'styled-components'

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  background-size: cover;
`

const Albums = ({ data }) => {
  return (
    <Composition
      templateCols="1fr 1fr "
      templateColsMd="1fr 1fr 1fr"
      templateColsLg="repeat(auto-fill, 250px)"
      gap={2}
      padding={1}
    >
      {data.map(album => (
        <Box>
          <StyledImage src={album.src} alt="img" />
          <p>{album.text}</p>
          <p>{album.subText}</p>
        </Box>
      ))}
    </Composition>
  )
}

export default Albums
