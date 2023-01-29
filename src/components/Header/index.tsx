import React from "react";
import * as S from "./styles";
import iconCart from "../../../public/assets/cartImage.png";
import Image from "next/image";

interface IHeaderComponent {
  numberOfProducts: number;
  handleClick: () => void;
}

const HeaderComponent: React.FC<IHeaderComponent> = ({
  numberOfProducts,
  handleClick,
}) => {
  return (
    <S.Header>
      <S.Flex gap="10px">
        <S.Text size="40px" weight="600" color="#fff">
          MKS
        </S.Text>
        <S.Text size="20px" weight="300" color="#fff">
          Sistemas
        </S.Text>
      </S.Flex>
      <S.FlexCart onClick={handleClick}>
        <Image src={iconCart} alt="icon cart" width={20} />
        <S.Text size="20px" weight="700">
          {numberOfProducts}
        </S.Text>
      </S.FlexCart>
    </S.Header>
  );
};

export default HeaderComponent;
