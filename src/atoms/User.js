import React from 'react'
import { Composition } from 'atomic-layout'
import styled from 'styled-components'
import Text from './Text'

const areasMobile = `
	avatar name
`

const styledAvatar = styled.img`
  width: 30px;
  height: auto;
  border-radius: 50%;
`

const User = ({ data }) => {
  return (
    <Composition areas={areasMobile} gapCol={1}>
      {({ Avatar, Name }) => (
        <>
          <Avatar
            as={styledAvatar}
            src={data[0].srcAvatar}
            alt="avatar"
          ></Avatar>
          <Name flex align="center">
            <Text textBold>{data[0].name}</Text>
          </Name>
        </>
      )}
    </Composition>
  )
}

export default User
