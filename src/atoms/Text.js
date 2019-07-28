import styled from 'styled-components'

const Text = styled.p`
  font-size: 1rem; //14

  ${props =>
    props.small &&
    `
			font-size: 0.8rem; //12
		`}
`

export default Text
