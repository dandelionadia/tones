import React from 'react'
import { Composition, Box } from 'atomic-layout'
import styled from 'styled-components'
import Heading from '../../../atoms/Heading'
import Text from '../../../atoms/Text'
import Button from '../../../atoms/Button'
import HollowButton from '../../../atoms/HollowButton'
import Menu from '../../../molecules/Menu'

function formatNumber(number) {
  return number.toLocaleString ? number.toLocaleString('en-US') : number
}

const StyledHeader = styled.div`
  background-color: ${({ theme }) => theme.colors.greyDark};
  padding: 5rem 0 1rem;
  background-image: url(${({ imageUrl }) => imageUrl});
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

const StyledTitle = styled(Heading)`
  @media (max-width: 576px) {
    font-size: 60px;
  }
`

const Header = ({ artistData }) => {
  return (
    <StyledHeader imageUrl={artistData.images[0].url}>
      <Text small letterSpacing>
        {formatNumber(artistData.followers.total)} MONTHLY LISTENERS
      </Text>
      <StyledTitle as="h1">{artistData.name}</StyledTitle>
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
        <HollowButton kind="primary">
          <Text as="span" small letterSpacing>
            follow
          </Text>
        </HollowButton>
      </Composition>
      <Box flex justifyContent="center" paddingVertical={1.3}>
        <Menu />
      </Box>
    </StyledHeader>
  )
}

export default Header
