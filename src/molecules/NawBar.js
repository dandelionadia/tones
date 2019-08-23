import React from 'react'
import styled from 'styled-components'
import { Composition } from 'atomic-layout'

const areasMobile = `
  logo
  links
  userInfo
`

const StyledNavBar = styled.div`
  background-color: ${({ theme }) => theme.colors.blackDark};
  height: auto;
`

const NawBar = () => {
  return (
    <Composition areas={areasMobile} as={StyledNavBar} gap={2}>
      {Areas => (
        <>
          <div>
            <Areas.Logo>
              <div>Logo</div>
            </Areas.Logo>
            <Areas.Links>
              <div>Links</div>
            </Areas.Links>
            <Areas.UserInfo flex align="end">
              <div>user info</div>
            </Areas.UserInfo>
          </div>
        </>
      )}
    </Composition>
  )
}

export default NawBar