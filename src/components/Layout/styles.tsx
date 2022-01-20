import styled from "styled-components";

export const LayoutWrapper = styled.div<{
  toggle: boolean;
}>`
  height: 100vh;
  display: grid;
  grid-template-columns: ${(props) => (props.toggle ? "2fr 10fr" : "1fr 16fr")};
`;
