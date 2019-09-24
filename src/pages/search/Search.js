import React from 'react'
import styled from 'styled-components'
import { Box } from 'atomic-layout'

const StyledInput = styled.input`
  background-color: #282828;
  color: #fff;
  width: 100%;
  padding: 16px;
  border: none;
  font-size: 36px;
  line-height: 44px;
  letter-spacing: 0.02em;
  font-weight: bold;
`

const Search = () => {
  return (
    <>
      <Box>
        <StyledInput
          type="search"
          id="search"
          name="search"
          placeholder="Start typing..."
        />
      </Box>
    </>
  )
}

export default Search
