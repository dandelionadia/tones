import styled from 'styled-components'

const Button = styled.button`
  padding: 0.9rem 2.8rem;
  margin: 15px 0;
  text-transform: uppercase;
  font-size: 0.7rem;
  background-color: ${({ kind, theme }) =>
    kind === 'primary' ? theme.colors.green : 'rgba(24, 24, 24, 0.7)'};
  border-radius: 2rem;
  border: none;
  box-shadow: ${({ kind }) =>
    kind === 'primary' ? 0 : 'inset 0 0 0 2px #b3b3b3'}
  color: ${({ kind, theme }) =>
    kind === 'primary' ? theme.colors.white : theme.colors.green};
  position: relative;
  z-index: 2;
`

export default Button
