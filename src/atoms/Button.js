import styled from 'styled-components'

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.green};
  color: ${({ theme }) => theme.colors.white};
  padding: 0.9rem 2.8rem;
  margin: 15px 0;
  text-transform: uppercase;
  font-size: 0.7rem;
  border-radius: 2rem;
  border: none;
  box-shadow: 0;
`

export default Button
