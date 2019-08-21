import React from 'react'
import styled from 'styled-components'
import { NavLink, withRouter } from 'react-router-dom'
import Text from '../atoms/Text'

const StyledMenu = styled.ul`
  text-decoration: none;
  padding: 0;
  margin: 0;
  width: 100%;
  text-transform: uppercase;

  a {
    color: ${props => props.theme.colors.greyLight};
  }
`

const StyledLink = styled(NavLink)`
  &.active,
  &:hover {
    color: ${props => props.theme.colors.white};
  }
`

const StyledList = styled.li`
  list-style: none;
  display: inline-block;
  margin: 0.5rem 0.8rem;

  @media (min-width: 768px) {
    padding: 0.8rem;
  }
`

export const menu = [
  {
    value: 'gfghfgh',
    url: ''
  },
  {
    value: 'Related Artists',
    url: '/related'
  },
  {
    value: 'About',
    url: '/about'
  }
]

class Menu extends React.Component {
  render() {
    const { match } = this.props

    return (
      <StyledMenu>
        {menu.map((item, index) => (
          <StyledList key={index}>
            <StyledLink exact to={match.url + item.url}>
              <Text textBold small>
                {item.value}
              </Text>
            </StyledLink>
          </StyledList>
        ))}
      </StyledMenu>
    )
  }
}

export default withRouter(Menu)
