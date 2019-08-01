import React from 'react'
import styled from 'styled-components'

const Foo = styled.p`
  width: 100%;
  height: 100%;
  background-color: red;
`

function About() {
  return (
    <div>
      <Foo>About</Foo>
    </div>
  )
}

export { About }
