import React from 'react'
import { Composition } from 'atomic-layout'

const areasMobile = `
	title 
	autor 
`

function Titles() {
  return (
    <Composition areas={areasMobile} gap={2}>
      {Areas => (
        <>
          <Areas.Title>Title</Areas.Title>
          <Areas.Autor>Autor</Areas.Autor>
        </>
      )}
    </Composition>
  )
}

export default Titles
