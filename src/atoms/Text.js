import styled from 'styled-components'

const Text = styled.p`
  font-size: 1rem; //14
  position: relative;
  z-index: 2;

  ${props =>
    props.small &&
    `
			font-size: 0.7rem; //12
    `}

  ${props =>
    props.colorGrey &&
    `
      color: ${props.theme.colors.greyLight}
    `}
  
  ${props => props.letterSpacing && ` letter-spacing:  0.16rem`}
`

export default Text
