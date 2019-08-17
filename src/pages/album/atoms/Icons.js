import React from 'react'
import { Composition } from 'atomic-layout'

const areasMobile = `
	like dropDown
	/ auto auto
`

function Icons() {
  return (
    <Composition inline template={areasMobile} gap={2}>
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
