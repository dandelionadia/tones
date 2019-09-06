import styled, { css } from 'styled-components'

const Text = styled.p`
  font-size: 14px;
  margin: 0;

  ${props =>
    props.small &&
    css`
      font-size: 0.7rem; //11
    `}
  
  ${props =>
    props.big &&
    css`
      font-size: 1.1rem; //16
    `}

  ${props =>
    props.colorGrey &&
    css`
      color: ${props.theme.colors.greyLight};
    `}

  ${props =>
    props.colorWhite &&
    css`
      color: ${props.theme.colors.white};
    `}

  ${props =>
    props.letterSpacing &&
    css`
      letter-spacing: 0.15rem;
    `}

  ${props =>
    props.textBold &&
    css`
      font-weight: bold;
    `}

  ${props =>
    props.margin &&
    css`
      margin: 10px 0 4px 0;
    `}

  ${props =>
    props.tetxCenter &&
    css`
      text-align: center;
    `}

  ${props =>
    props.inline &&
    css`
      display: inline;
    `}

  ${props =>
    props.muted &&
    css`
      opacity: 0.6;
    `}
`

export default Text
