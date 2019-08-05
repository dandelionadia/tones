import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Text from '../atoms/Text'

const StyledMenu = styled.ul`
  text-decoration: none;
  padding: 0;
  margin: 0;
  width: 100%;
`
const StyledList = styled.li`
  list-style: none;
  display: inline-block;
  padding: 0.3rem;
  margin: 0.5rem 0.8rem;

  &:hover {
    color: red;
  }
`

export const menu = [
  {
    value: 'Overview',
    url: '/artist'
  },
  {
    value: 'Related',
    url: '/artist/related'
  },
  {
    value: 'About',
    url: '/artist/about'
  }
]

class Menu extends React.Component {
  render() {
    return (
      <StyledMenu>
        {menu.map((item, index) => (
          <StyledList key={index}>
            <Link to={item.url}>
              <Text textBold colorGrey>
                {item.value}
              </Text>
            </Link>
          </StyledList>
        ))}
      </StyledMenu>
    )
  }
}

export default Menu
