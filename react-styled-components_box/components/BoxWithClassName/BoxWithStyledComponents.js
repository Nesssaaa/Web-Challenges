import styled, { css } from "styled-components";

export const StyledBox = styled.div`
  width: 100px;
  height: 100px;
  margin: 2rem;
  ${(props) =>
    props.$variant === "green" &&
    css`
      background-color: green;
    `};

  ${(props) =>
    props.$variant === "black" &&
    css`
      background-color: black;
    `};

  &:hover {
    background-color: red;
  }
`;
