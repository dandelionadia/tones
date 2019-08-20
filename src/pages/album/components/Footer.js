import React from 'react'
import Text from '../../../atoms/Text'
import styled from 'styled-components'

const StyledFooter = styled(Text)`
  margin: 2rem 0;
`

function Footer({ data }) {
  return (
    <div>
      <StyledFooter small>{data.text}</StyledFooter>
    </div>
  )
}

export default Footer
