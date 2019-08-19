import React from 'react'
import { Composition } from 'atomic-layout'
import { IoIosHeartEmpty, IoIosMore } from 'react-icons/io'

const areasMobile = `
	like dropDown
	/ auto auto
`

function Icons() {
  return (
    <Composition inline template={areasMobile} gap={2}>
      {Areas => (
        <>
          <Areas.Like padding="6px">
            <IoIosHeartEmpty size="24px" />
          </Areas.Like>
          <Areas.DropDown padding="6px">
            <IoIosMore size="24px" />
          </Areas.DropDown>
        </>
      )}
    </Composition>
  )
}

export default Icons
