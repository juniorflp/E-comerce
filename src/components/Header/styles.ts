import styled from "styled-components";

interface StylesProps {
  size?: string;
  weight?: string;
  gap?: string;
  color?: string;
}

export const Flex = styled.div<StylesProps>`
  display: flex;
  align-items: center;
  gap: ${(props) => props.gap};
`;

export const Header = styled.div`
  width: 100%;
  height: 101px;
  background-color: #0f52ba;
  display: flex;
  align-items: center;
  padding: 65px 29px 65px 29px;
  justify-content: space-around;

  @media (max-width: 650px) {
    height: 48px;
    padding: 35px 18px 35px 18px;
  }
  @media (max-width: 370px) {
    gap: 8px;
  }
`;

export const Text = styled.p<StylesProps>`
  color: ${(props) => props.color};
  font-size: ${(props) => props.size || "16px"};
  font-weight: ${(props) => props.weight || "400"};
`;

export const FlexCart = styled.button<StylesProps>`
  display: flex;
  align-items: center;
  gap: ${(props) => props.gap};
  background-color: #fff;
  width: 90px;
  height: 45px;
  border-radius: 8px;
  padding: 8px;
  justify-content: space-around;
  border: none;
  cursor: pointer;
  @media (max-width: 370px) {
    gap: 2px;
    padding: 4px;
  }
`;
