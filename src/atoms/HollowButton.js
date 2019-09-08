import styled, { css } from 'styled-components'

const HollowButton = styled.button`
  background-color: rgba(24, 24, 24, 0.7);
  color: ${({ kind, theme }) =>
    kind === 'primary' ? theme.colors.green : theme.colors.white};
  padding: ${({ kind }) => (kind === 'primary' ? '0.9rem 2.8rem' : '7px 22px')};
  margin: ${({ kind }) => (kind === 'primary' ? '15px 0' : '15px 0 0 0')};
  text-transform: uppercase;
  font-size: 0.7rem;
  border-radius: 2rem;
  border: none;
  box-shadow: inset 0 0 0 2px #b3b3b3;

  ${({ kind }) =>
    kind !== 'primary' &&
    css`
      width: 100%;
    `};
`

export default HollowButton
