import styled from "styled-components";

export const ContainerCard = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 22px;
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 650px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Cards = styled.div`
  width: 217px;
  height: 331px;
  margin-top: 10px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
  border-radius: 8px;
  line-height: 1;
`;
