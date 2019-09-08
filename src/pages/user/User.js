import React from 'react'
import styled from 'styled-components'
import { Composition } from 'atomic-layout'
import { createGlobalStyle } from 'styled-components'
import Heading from '../../atoms/Heading'
import HollowButton from '../../atoms/HollowButton'
import Text from '../../atoms/Text'

const GlobalStyle = createGlobalStyle`
  body {
    background-image: linear-gradient(to right bottom, rgb(18, 18, 18), rgb(0, 0, 0)), linear-gradient(transparent, rgb(0, 0, 0) 70%);
    height: 100vh;
  }

`

const StyledImageBox = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
`

const StyledUl = styled.ul`
  display: flex;
  padding: 0;
  margin: 40px 0;
  width: 100%;
  justify-content: space-between;
`

const StyledList = styled.li`
  text-decoration: none;
  list-style: none;
  padding-right: 5px;

  &:not(:last-child) {
    border-right: 1.5px solid grey;
  }
`

const StyledLink = styled.a`
  text-transform: capitalize;
`

const dataButtons = [
  {
    button: 'view account'
  },
  {
    button: 'full website'
  },
  {
    button: 'help'
  },
  {
    button: 'log out'
  }
]

const User = () => {
  return (
    <>
      <GlobalStyle />
      <Composition
        flex
        alignItems="center"
        justifyItems="center"
        paddingTop="50px"
        maxWidth="230px"
        marginHorizontal="auto"
      >
        <StyledImageBox>
          <img
            src="https://imgix.ranker.com/user_node_img/50058/1001158933/original/momo-is-an-incarnation-of-aye-aye-the-lemur-spirit-photo-u1?w=650&q=50&fm=pjpg&fit=crop&crop=faces"
            alt="avatar"
          />
        </StyledImageBox>
        <Heading margin>Dangora</Heading>
        {dataButtons.map((button, index) => (
          <HollowButton key={index}>{button.button}</HollowButton>
        ))}
        <StyledUl>
          <StyledList>
            <StyledLink href="#">
              <Text small colorGrey textBold>
                legal
              </Text>
            </StyledLink>
          </StyledList>
          <StyledList>
            <StyledLink href="#">
              <Text small colorGrey textBold>
                privacy
              </Text>
            </StyledLink>
          </StyledList>
          <StyledList>
            <StyledLink href="#">
              <Text small colorGrey textBold>
                cookies
              </Text>
            </StyledLink>
          </StyledList>
          <StyledList>
            <StyledLink href="#">
              <Text small colorGrey textBold>
                about ads
              </Text>
            </StyledLink>
          </StyledList>
        </StyledUl>
      </Composition>
    </>
  )
}

export default User
