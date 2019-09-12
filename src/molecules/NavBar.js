import React from 'react'
import styled from 'styled-components'
import { Composition } from 'atomic-layout'
import Logo from '../atoms/Logo.svg'
import Menu from '../atoms/Menu'
import { GoHome, GoSearch } from 'react-icons/go'
import User from '../atoms/User'
import { Link } from 'react-router-dom'

const areasMobile = `
  logo auto
  links 1fr
  userInfo auto
`

const StyledNavBar = styled.div`
  background-color: rgba(0, 0, 0, 1);
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
    url: '/search'
  }
]

const dataUser = [
  {
    name: 'Dangora',
    srcAvatar:
      'https://imgix.ranker.com/user_node_img/50058/1001158933/original/momo-is-an-incarnation-of-aye-aye-the-lemur-spirit-photo-u1?w=650&q=50&fm=pjpg&fit=crop&crop=faces'
  }
]

const NavBar = () => {
  return (
    <Composition template={areasMobile} as={StyledNavBar} gap={2}>
      {Areas => (
        <>
          <Areas.Logo as={StyledLogo}>
            <img src={Logo} alt="logo" />
          </Areas.Logo>
          <Areas.Links>
            <Menu data={dataLink} />
          </Areas.Links>
          <Areas.UserInfo flex align="end">
            <Link to="/user">
              <User data={dataUser} />
            </Link>
          </Areas.UserInfo>
        </>
      )}
    </Composition>
  )
}

export default NavBar
