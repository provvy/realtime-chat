import styled from "styled-components";

export const Button = styled.button`
  color: #fff;
  background: ${(props) => (props.isColorblind ? "#444" : "#9147ff")};
  font-weight: bold;
  font-size: 18px;
  padding: 0.5rem 1.5rem;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  &:hover {
    background: ${(props) => (props.isColorblind ? "#000" : "#772ce8")};
  }
`;
