import styled from 'styled-components'

const Heading = styled.h2`
  font-size: 2.5rem; // 36
  margin: 0 0 1em;

  ${props =>
    props.as === `h1` &&
    `
      font-size: 4.6rem; // 72
      margin: 0;
		`}
`

export default Heading
