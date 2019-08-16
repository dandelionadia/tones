import styled from 'styled-components'

const Text = styled.p`
  font-size: 1rem; //14
  margin: 0;

  ${props =>
    props.small &&
    `
			font-size: 0.8rem; //12
    `}
  
  ${props =>
    props.big &&
    `
      font-size: 1.1rem; //16
    `}

  ${props =>
    props.colorGrey &&
    `
      color: ${props.theme.colors.greyLight}
    `}

  ${props =>
    props.colorWhite &&
    `
      color: ${props.theme.colors.white}
    `}

  ${props => props.letterSpacing && ` letter-spacing:  0.16rem`}

  ${props =>
    props.textBold &&
    `
    font-weight: bold;
  `}

  ${props =>
    props.margin &&
    `
    margin: 10px 0 4px 0;
  `}

  ${props =>
    props.tetxCenter &&
    `
    text-align: center;
  `}
`

export default Text
