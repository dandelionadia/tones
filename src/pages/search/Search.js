import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Box } from 'atomic-layout'
import { Link } from 'react-router-dom'
import Grid from '../../atoms/Grid'

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
  //state text which was written in the input
  const [value, setValue] = useState('')
  //state resalt from backend
  const [searchResults, setSearchResults] = useState(null)

  useEffect(() => {
    fetch(
      `https://spotify-proxy-57097.herokuapp.com/v1/search?q=${value}&type=artist`
    )
      .then(response => response.json())
      .then(json => {
        setSearchResults(json)
      })
  }, [value])

  const handleChange = event => {
    return setValue(event.target.value)
  }

  return (
    <>
      <Box>
        <StyledInput
          type="search"
          id="search"
          name="search"
          placeholder="Start typing..."
          value={value}
          onChange={handleChange}
        />
        <Grid>
          {searchResults &&
            searchResults.artists &&
            searchResults.artists.items.map(artist => {
              return (
                <Link to={`artist/${artist.id}`} key={artist.id}>
                  <p key={artist.id}>{artist.name}</p>
                </Link>
              )
            })}
        </Grid>
      </Box>
    </>
  )
}

export default Search
