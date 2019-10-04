import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Box } from 'atomic-layout'
import debounce from 'lodash.debounce'
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

  const doSearch = searchQuery => {
    fetch(
      `https://spotify-proxy-57097.herokuapp.com/v1/search?q=${searchQuery}&type=artist`
    )
      .then(response => response.json())
      .then(json => {
        setSearchResults(json)
      })
  }

  const handleChange = event => {
    const nextValue = event.target.value
    console.log(event)
    setValue(nextValue)
    doSearch(nextValue)
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
          autoComplete="off"
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
