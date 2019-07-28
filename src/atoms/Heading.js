import styled from 'styled-components'

const Heading = styled.h2`
  font-size: 2.5rem;

  ${props =>
    props.as === `h1` &&
    `
			font-size: 5.1rem;
		`}

  ${props =>
    props.as === `h3` &&
    `
				font-size: 1.1rem;
			`}
`

export default Heading
