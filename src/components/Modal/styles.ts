import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
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
  top: 0;
  right: 0;
  color: white;
  font-size: 28px;
  padding: 25px;
  cursor: pointer;
  transition: transform 0.5s ease-in-out;
  :hover {
    transform: rotate(360deg);
  }
`;

export const Flex = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const WraperPhoto = styled.div`
  height: 100%;
  @media (max-width: 768px) {
    height: 100%;
    width: 300px;
  }
`;

export const WraperDiscription = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin-top: 50px;
  gap: 16px;
  h4 {
    color: #373737;
  }
  p {
    color: #373737;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;
