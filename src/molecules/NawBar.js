import React from 'react'
import styled from 'styled-components'
import { Composition } from 'atomic-layout'
import Logo from '../atoms/Logo.svg'

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

const NawBar = () => {
  return (
    <Composition areas={areasMobile} as={StyledNavBar} gap={1}>
      {Areas => (
        <>
          <Areas.Logo as={StyledLogo}>
            <img src={Logo} />
          </Areas.Logo>
          <Areas.Links>
            <div>Links</div>
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
