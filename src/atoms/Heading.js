import styled, { css } from 'styled-components'

const Heading = styled.h2`
  font-size: 2.5rem; // 36
  margin: 0 0 1em;

  ${props =>
    props.as === `h1` &&
    css`
      font-size: 4.6rem; // 72
      margin: 0;
    `}

  ${props =>
    props.as === `h3` &&
    css`
      font-size: 2rem; // 28
      margin: 0;
    `}

  ${props =>
    props.marginTop &&
    css`
      margin-top: 2rem;
    `}
  ${props =>
    props.margin &&
    css`
      margin: 24px 0 24px 0;
    `}
`

export default Heading
