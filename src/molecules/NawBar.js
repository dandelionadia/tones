import React from 'react'
import styled from 'styled-components'
import { Composition } from 'atomic-layout'
import Logo from '../atoms/Logo.svg'
import Link from '../atoms/Link'
import { GoHome, GoSearch } from 'react-icons/go'

const areasMobile = `
  logo
  links
  userInfo
`

const StyledNavBar = styled.div`
  background-color: ${({ theme }) => theme.colors.blackDark};
  height: 100vh;
  padding: 2rem;
  box-sizing: border-box;
  position: sticky;
  top: 0;
`

const StyledLogo = styled.div`
  width: 131px;
  height: 40px;
`

const dataLink = [
  {
    icon: GoHome,
    name: 'Home',
    url: '/'
  },
  {
    icon: GoSearch,
    name: 'Search',
    url: ''
  }
]

const NawBar = () => {
  return (
    <Composition areas={areasMobile} as={StyledNavBar} gap={1}>
      {Areas => (
        <>
          <Areas.Logo as={StyledLogo}>
            <img src={Logo} />
          </Areas.Logo>
          <Areas.Links>
            <Link data={dataLink} />
          </Areas.Links>
          <Areas.UserInfo flex align="end">
            <div>user info</div>
          </Areas.UserInfo>
        </>
      )}
    </Composition>
  )
}

export default NawBar
