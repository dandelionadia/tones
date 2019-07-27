import styled from 'styled-components'

const Text = styled.p`
  font-size: 1rem;

  ${props =>
    props.small &&
    `
			font-size: 0.8rem;
		`}

  ${props =>
    props.small &&
    `
			font-size: 1.2rem;
		`}
`

export default Text
