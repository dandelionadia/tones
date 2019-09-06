import React from 'react'
import styled from 'styled-components'
import { Composition } from 'atomic-layout'
import { createGlobalStyle } from 'styled-components'
import Heading from '../../atoms/Heading'
import HollowButton from '../../atoms/HollowButton'

const GlobalStyle = createGlobalStyle`
  body {
    background-image: linear-gradient(to right bottom, rgb(18, 18, 18), rgb(0, 0, 0)), linear-gradient(transparent, rgb(0, 0, 0) 70%);
  }
`

const StyledImageBox = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
`

const User = () => {
  return (
    <>
      <GlobalStyle />
      <Composition
        flex
        alignItems="center"
        justifyItems="center"
        paddingTop="50px"
        maxWidth="200px"
        marginHorizontal="auto"
      >
        <StyledImageBox>
          <img
            src="https://imgix.ranker.com/user_node_img/50058/1001158933/original/momo-is-an-incarnation-of-aye-aye-the-lemur-spirit-photo-u1?w=650&q=50&fm=pjpg&fit=crop&crop=faces"
            alt="image"
          ></img>
        </StyledImageBox>
        <Heading margin>Dangora</Heading>
        <HollowButton>btn</HollowButton>
        <ul>
          <li>foo</li>
        </ul>
      </Composition>
    </>
  )
}

export default User
