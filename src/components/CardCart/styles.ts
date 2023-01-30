import styled from "styled-components";

export const Card = styled.div`
  position: relative;
  width: 380px;
  padding: 18px 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
  border-radius: 8px;
  transition: all 0.2s ease-in-out;
  background-color: #ffff;
  :hover {
    transform: scale(1.05);
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.135216);
  }
  img {
    border-radius: 8px;
  }

  @media (max-width: 550px) {
    flex-direction: column;
    width: 260px;
    gap: 12px;
  }
`;
export const WraperPhoto = styled.div`
  width: 55px;
  @media (max-width: 550px) {
    width: 100px;
  }
`;

export const FlexName = styled.div`
  display: flex;
  max-width: 115px;
  p {
    line-height: 19px;
    color: #2c2c2c;
  }
  @media (max-width: 450px) {
    max-width: 215px;
  }
`;
export const Flex4 = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  @media (max-width: 450px) {
    flex-direction: column;
  }
`;

export const Flex5 = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  gap: 30px;
  @media (max-width: 550px) {
    flex-direction: row;
    justify-content: center;
    width: 100%;
  }
`;

export const FlexButton = styled.div`
  display: flex;
  flex-direction: column;

  p {
    font-size: 8px;
  }
`;

export const FlexButton2 = styled.div`
  width: 100%;
  border: 0.3px solid #bfbfbf;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px 6px;
  button {
    border: none;
    background-color: #fff;
    cursor: pointer;
    padding-left: 4px;
    padding-right: 4px;
  }
`;

export const FlexButton3 = styled.div`
  width: 100%;
  border-left: 0.3px solid #bfbfbf;
  border-right: 0.3px solid #bfbfbf;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  p {
    font-size: 8px;
    font-weight: 600;
  }
`;

export const Value = styled.p`
  font-weight: 700;
  font-size: 14px;
  @media (max-width: 550px) {
    font-size: 18px;
  }
`;

export const CloseButton = styled.button`
  width: 18px;
  height: 18px;
  border: none;
  background-color: #000;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -4px;
  right: -4px;
  color: white;
  font-size: 12px;
  padding: 8px;
  cursor: pointer;
  transition: transform 0.5s ease-in-out;
  :hover {
    transform: rotate(360deg);
  }
`;
