import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Text from '../atoms/Text'

const StyledMenu = styled.ul``

export const menu = [
  {
    value: 'OVERVIEW',
    url: '/'
  },
  {
    value: 'RELATED',
    url: '/related'
  },
  {
    value: 'ARTISTS',
    url: '/artist'
  },
  {
    value: 'ABOUT',
    url: '/about'
  }
]

class Menu extends React.Component {
  render() {
    return (
      <StyledMenu>
        {menu.map((item, index) => (
          <li key={index}>
            <Link to={item.url}>
              <Text textBold>{item.value}</Text>
            </Link>
          </li>
        ))}
      </StyledMenu>
    )
  }
}

export default Menu
