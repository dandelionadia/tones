import React from 'react'
import { Composition } from 'atomic-layout'

const areasMobile = `
	avatar name
`

const User = () => {
  return (
    <Composition areas={areasMobile} gapCol={1}>
      {({ Avatar, Name }) => (
        <>
          <Avatar>avatar</Avatar>
          <Name>name</Name>
        </>
      )}
    </Composition>
  )
}

export default User
