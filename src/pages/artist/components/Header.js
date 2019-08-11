import React from 'react'
import { Composition, Box } from 'atomic-layout'
import styled from 'styled-components'
import Heading from '../../../atoms/Heading'
import Text from '../../../atoms/Text'
import Button from '../../../atoms/Button'
import Menu from '../../../molecules/Menu'

const StyledHeader = styled.div`
  background-color: ${({ theme }) => theme.colors.greyDark};
  padding: 5rem 0 1rem;
  background-image: url('https://i.scdn.co/image/e359e1b7437818b070ed7578770bdff51513b185');
  background-size: cover;
  background-position: 50%;
  position: relative;
  z-index: 0;
  text-align: center;

  &::before {
    content: '';
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    position: absolute;
    z-index: -1;
    background: linear-gradient(transparent -30%, #181818);
  }
`

const Header = ({ artistData }) => (
  <StyledHeader>
    <Text small colorGrey letterSpacing>
      16,686,235 MONTHLY LISTENERS
    </Text>
    <Heading as="h1">{artistData.name}</Heading>
    <Composition
      inline
      gap={1}
      templateCols="repeat(2, auto)"
      paddingTop={1.1}
      paddingBottom={1.9}
    >
      <Button kind="primary">
        <Text as="span" small LetterSpacing>
          play
        </Text>
      </Button>
      <Button>
        <Text as="span" small letterSpacing>
          follow
        </Text>
      </Button>
    </Composition>
    <Box flex justifyContent="center" paddingVertical={1.3}>
      <Menu />
    </Box>
  </StyledHeader>
)

export default Header
