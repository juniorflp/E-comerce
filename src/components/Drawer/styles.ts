import styled from "styled-components";

interface Props {
  isOpen: boolean;
}

export const DrawerContainer = styled.div<Props>`
  position: fixed;
  right: 0;
  top: 0;
  height: 100%;
  width: 500px;
  background-color: #fff;
  z-index: 100;
  box-shadow: 2px 0px 10px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease-out;
  transform: ${(props) =>
    props.isOpen ? "translateX(0)" : "translateX(100%)"};

  @media (max-width: 550px) {
    width: 400px;
  }
  @media (max-width: 450px) {
    width: 320px;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #0f52ba;
  padding-left: 20px;
  padding-right: 20px;
  box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);
  padding-top: 36px;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const FlexTitle = styled.div`
  max-width: 180px;
  align-self: flex-start;
  p {
    color: #fff;
    font-size: 27px;
    font-weight: 700;
  }
`;
export const ContainerCards = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 20px;
  overflow-y: auto;
  gap: 28px;
  flex: 1;
  margin-top: 40px;
  transition: all 0.5s ease-in-out;
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #0b2d60;
    border-radius: 100px;
  }
`;

export const FlexTotal = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 120px;
  margin-top: 12px;
  p {
    color: #fff;
    font-size: 27px;
    font-weight: 700;
  }

  & > div:nth-child(2) {
    color: #fff;
    font-size: 27px;
    font-weight: 700;
  }
`;
export const CloseButton = styled.button`
  width: 38px;
  height: 38px;
  border: none;
  background-color: #000;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 36px;
  right: 22px;
  color: white;
  font-size: 28px;
  padding: 25px;
  cursor: pointer;
  transition: transform 0.5s ease-in-out;
  :hover {
    transform: rotate(360deg);
  }
`;

export const ButtonBuy = styled.button`
  width: 100%;
  border: none;
  background-color: #000;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 27px;
  font-weight: 700;
  position: absolute;
  bottom: 0;
  left: 0;
  height: 97px;
  cursor: pointer;
`;
