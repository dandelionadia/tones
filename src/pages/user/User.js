import React from 'react'
import styled from 'styled-components'
import { Composition } from 'atomic-layout'
import Heading from '../../atoms/Heading'
import Button from '../../atoms/Button'

const StyledImageBox = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
`

const User = () => {
  return (
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
      <Button padding>btn</Button>
      <ul>
        <li>foo</li>
      </ul>
    </Composition>
  )
}

export default User
