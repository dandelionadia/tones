import styled from 'styled-components'

const Button = styled.button`
  padding: 1rem 3rem;
  margin: 15px 0;
  text-transform: uppercase;
  font-size: 11px;
  background-color: ${({ kind, theme }) =>
    kind === 'primary' ? theme.colors.green : theme.colors.transparent};
  border-radius: 2rem;
  border: ${({ kind }) => (kind === 'primary' ? 0 : '2px solid #fff')};
  color: ${({ kind, theme }) =>
    kind === 'primary' ? theme.colors.white : theme.colors.green};
`

export default Button
