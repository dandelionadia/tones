import styled from 'styled-components'

const ShowMoreButton = styled.button`
  color: ${({ theme }) => theme.colors.white};
  background-color: transparent;
  padding: 1.1rem;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  font-size: 0.7rem;
  border: none;
  display: flex;
  align-items: center;
`

export default ShowMoreButton
