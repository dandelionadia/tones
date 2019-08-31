import React from 'react'
import { Composition } from 'atomic-layout'
import styled from 'styled-components'
import { withRouter } from 'react-router-dom'
import Link from './Link'

const StyledUl = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  // display: block !important;

  a {
    color: ${props => props.theme.colors.greyLight};
  }
`

const Menu = ({ data }) => {
  return (
    <Composition as={StyledUl} gapRow={1.25}>
      {data.map((menuItem, index) => (
        <li key={index}>
          <Link menuItem={menuItem} />
        </li>
      ))}
    </Composition>
  )
}

export default withRouter(Menu)
