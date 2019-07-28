import React from 'react'
import { Composition, Box } from 'atomic-layout'
import styled from 'styled-components'
import Heading from '../atoms/Heading'
import Text from '../atoms/Text'
import Button from '../atoms/Button'

const StyledHeader = styled.div`
  background-color: ${({ theme }) => theme.colors.greyDark};
  padding: 5rem 0 1rem;
`

const Header = () => (
  <StyledHeader>
    <Text>subtitle</Text>
    <Heading as="h1">Linkin Park</Heading>
    <Composition inline gap={1} templateCols="repeat(2, auto)" padding={1.1}>
      <Button kind="primary">primary</Button>
      <Button>press me foo</Button>
    </Composition>
    <Box flex justifyContent="center">
      menu
    </Box>
  </StyledHeader>
)

export default Header
