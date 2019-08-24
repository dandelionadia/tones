import React from 'react'
import { Composition, Box } from 'atomic-layout'
import styled from 'styled-components'
import { NavLink, withRouter } from 'react-router-dom'
import Text from './Text'

const areasMobile = `
	icon name
`

const StyledUl = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  // display: block !important;

  a {
    color: ${props => props.theme.colors.greyLight};
  }
`

const StyledLink = styled(NavLink)`
  // display: flex;

  &.active,
  &:hover {
    color: ${props => props.theme.colors.white};
  }
`

const Link = ({ data }) => {
  return (
    <Composition areas={areasMobile} gapCol={1} as={StyledUl}>
      {({ Icon, Name }) => (
        <>
          {data.map((menuItem, index) => (
            <Box as="li" key={index} gapRow={2}>
              <StyledLink exact to={menuItem.url}>
                <Icon marginRight={1}>
                  <menuItem.icon size={20} />
                </Icon>
                <Name>
                  <Text textBold>{menuItem.name}</Text>
                </Name>
              </StyledLink>
            </Box>
          ))}
        </>
      )}
    </Composition>
  )
}

export default withRouter(Link)
