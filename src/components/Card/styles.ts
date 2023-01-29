import styled from "styled-components";

export const Card = styled.div`
  position: relative;
  width: 217px;
  margin-top: 10px;
  padding: 14px 18px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
  border-radius: 8px;
  transition: all 0.2s ease-in-out;
  :hover {
    transform: scale(1.05);
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.135216);
  }
  img {
    border-radius: 8px;
  }
`;
export const WraperPhoto = styled.div`
  width: 100%;
  height: 160px;
`;

export const FlexName = styled.div`
  display: flex;
  width: 100%;
  gap: 4px;
  margin-top: 12px;
  flex: 1;
  p {
    width: 70%;
    line-height: 19px;
    font-weight: 500;
  }

  & > div:nth-child(2) {
    height: 26px;
    border-radius: 8px;
    color: #ffff;
    background-color: #373737;
    padding: 6px;
    display: flex;
    align-items: center;
    font-size: 15px;
    font-weight: 700;
  }
`;

export const FlexDescription = styled.div`
  display: flex;
  width: 100%;
  margin-top: 12px;
  overflow: hidden;
  margin-bottom: 30px;

  p {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    line-height: 16px;
    font-weight: 300;
    font-size: 13px;
    text-overflow: ellipsis;
  }
`;

export const ButtonCard = styled.button`
  width: 100%;
  height: 32px;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  background: #0f52ba;
  border-radius: 0px 0px 8px 8px;
  border: none;
  color: #ffff;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease-in;
  :hover {
    background-color: #0f4699;
  }
`;

export const FlexButton = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 14px;
`;
