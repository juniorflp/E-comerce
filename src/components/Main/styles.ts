import styled from "styled-components";

export const Wraper = styled.main`
  width: 100%;
  display: flex;
  margin-bottom: 100px;
  flex-direction: column;
  align-items: center;
`;
export const Footer = styled.footer`
  width: 100%;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #eeeeee;
`;
export const Container = styled.div`
  max-width: 940px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContainerCard = styled.div`
  display: grid;
  margin-top: 80px;
  grid-template-columns: repeat(4, 1fr);
  gap: 22px;
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 650px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Card = styled.div`
  position: relative;
  width: 240px;
  padding: 14px 18px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
  border-radius: 8px;
  img {
    border-radius: 8px;
  }
`;
export const WraperPhoto = styled.div`
  width: 100%;
  height: 190px;
`;
