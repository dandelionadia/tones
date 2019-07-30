import styled from 'styled-components'

const Text = styled.p`
  font-size: 1rem; //14

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

  ${props =>
    props.textBold &&
    `
    font-weight: bold;
  `}
`

export default Text
