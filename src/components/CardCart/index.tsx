import React from "react";
import { IshooppingCart } from "../../@types/api/products-interface";
import {
  addToCart,
  removeAllProductsFromCart,
  removeFromCart,
} from "../../features/products/productsSlice";
import { useAppDispatch } from "../../hooks/redux";
import * as S from "./styles";

interface IcardCart {
  product: IshooppingCart;
}

const CardCart: React.FC<IcardCart> = ({ product }) => {
  const dispatch = useAppDispatch();

  const value = product.quantity * Number(product.price);
  const formatedValue = value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  return (
    <S.Card>
      <S.Flex4>
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
        </S.FlexName>
      </S.Flex4>
      <S.Flex5>
        <S.FlexButton>
          <p>Qtd:</p>
          <S.FlexButton2>
            <button onClick={() => dispatch(removeFromCart(product.id))}>
              -
            </button>
            <S.FlexButton3>
              <p>{product.quantity}</p>
            </S.FlexButton3>
            <button onClick={() => dispatch(addToCart(product.id))}>+</button>
          </S.FlexButton2>
        </S.FlexButton>
        <S.Value>{formatedValue}</S.Value>
      </S.Flex5>
      <S.CloseButton
        onClick={() => dispatch(removeAllProductsFromCart(product.id))}
      >
        X
      </S.CloseButton>
    </S.Card>
  );
};

export default CardCart;
