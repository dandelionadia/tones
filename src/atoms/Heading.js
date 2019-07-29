import styled from 'styled-components'

const Heading = styled.h2`
  font-size: 2.5rem; //36
  position: relative;
  z-index: 2;

  ${props =>
    props.as === `h1` &&
    `
      font-size: 4.6rem; //72
      margin: 0;
      position: relative;
		`}

  ${props =>
    props.as === `h3` &&
    `
				font-size: 1.1rem; //16
			`}
`

export default Heading
