import styled from "styled-components";

const Button = styled.button`
  padding: 1rem 3rem;
  margin: 15px 0;
  text-transform: uppercase;
  font-size: 11px;
  background-color: ${({ kind }) =>
    kind === "primary" ? "#1ed760" : "transparent"};
  border-radius: 2rem;
  border: ${({ kind }) => (kind === "primary" ? 0 : "2px solid #fff")};
  color: ${({ kind }) => (kind === "primary" ? "white" : "#1ed760")};
`;

export default Button;
