import React from "react";
import { Product } from "../../@types/api/products-interface";
import IconCart from "../iconComponents/IconCart";
import * as S from "./styles";

interface ICardproduct {
  product: Product;
  handleClick: () => void;
}

const CardProduct: React.FC<ICardproduct> = ({ product, handleClick }) => {
  return (
    <S.Card key={product.id}>
      <S.WraperPhoto>
        <img
          src={product.photo}
          width="100%"
          height="100%"
          alt={product.name}
        />
      </S.WraperPhoto>
      <S.FlexName>
        <p>{product.name}</p>
        <div>
          <p>R${product.price}</p>
        </div>
      </S.FlexName>
      <S.FlexDescription>
        <p>{product.description}</p>
      </S.FlexDescription>

      <S.ButtonCard onClick={handleClick}>
        <S.FlexButton>
          <IconCart />
          <p>Comprar</p>
        </S.FlexButton>
      </S.ButtonCard>
    </S.Card>
  );
};

export default CardProduct;
