import styled from "styled-components";

export const InnerGrid = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: 1fr 8fr 1fr;
`;

export const ImageGrid = styled.div`
  display: grid;
  grid-gap: 6px;
  grid-auto-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    cursor: pointer;
  }
`;
