import React from 'react'
import { Composition, Box } from 'atomic-layout'
import styled from 'styled-components'
import { NavLink, withRouter } from 'react-router-dom'
import Text from './Text'

const areasMobile = `
	icon name
	/ auto 1fr
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

const Link = ({ menuItem }) => {
  return (
    <Composition
      template={areasMobile}
      as={StyledLink}
      gapRow={2}
      gapCol={1}
      exact
      to={menuItem.url}
    >
      {({ Icon, Name }) => (
        <>
          <Icon>
            <menuItem.icon size={20} />
          </Icon>
          <Name>
            <Text textBold>{menuItem.name}</Text>
          </Name>
        </>
      )}
    </Composition>
  )
}

const Menu = ({ data }) => {
  return (
    <Composition as={StyledUl} gapRow={2}>
      {data.map((menuItem, index) => (
        <li key={index}>
          <Link menuItem={menuItem} />
        </li>
      ))}
    </Composition>
  )
}

export default withRouter(Menu)
