import React from 'react'
import styled from 'styled-components'
import { Box } from 'atomic-layout'

const StyledInput = styled.input`
  width: 100%;
  margin: 0.4rem 0;
`

const Search = () => {
  return (
    <>
      <Box>
        <StyledInput type="text" id="name" name="name" />
      </Box>
    </>
  )
}

export default Search
