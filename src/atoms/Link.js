import React from 'react'
import { Composition } from 'atomic-layout'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import Text from './Text'

const areasMobile = `
	icon name
	/ auto 1fr
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

export default Link
