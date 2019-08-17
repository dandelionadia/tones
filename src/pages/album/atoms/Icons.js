import React from 'react'
import { Composition } from 'atomic-layout'

const areasMobile = `
	like dropDown 
`

function Icons() {
  return (
    <Composition areas={areasMobile} gap={2}>
      {Areas => (
        <>
          <Areas.Like>like</Areas.Like>
          <Areas.DropDown>dropDown</Areas.DropDown>
        </>
      )}
    </Composition>
  )
}

export default Icons
