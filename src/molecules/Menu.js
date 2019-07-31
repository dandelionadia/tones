import React from 'react'
import styled from 'styled-components'
import Text from '../atoms/Text'

const StyledMenu = styled.ul`
  text-decoration: none;
  padding: 0;
  width: 100%;
`
const StyledList = styled.li`
  list-style: none;
  display: inline-block;
  padding: 0.8rem;
  margin: 0.5rem 0.8rem;

  &:hover {
    color: red;
  }
`

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
          <StyledList key={index}>
            <a src={item.url}>
              <Text textBold colorGrey>
                {item.value}
              </Text>
            </a>
          </StyledList>
        ))}
      </StyledMenu>
    )
  }
}

export default Menu
