import React from "react";
import { useAppSelector } from "../../hooks/redux";
import CardCart from "../CardCart";
import * as S from "./styles";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface IDrawer {
  isOpenDrawer: boolean;
  toggleDrawer: () => void;
}

const DrawerComponent: React.FC<IDrawer> = ({ isOpenDrawer, toggleDrawer }) => {
  const { shoppingCart } = useAppSelector((state) => state);
  const handleBuy = () => {
    toast("🔒 Função em desenvolvimento!");
  };

  const totalCart = shoppingCart.reduce((total, current) => {
    return total + Number(current.price) * current.quantity;
  }, 0);

  const formatedTotal = totalCart.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  return (
    <S.DrawerContainer isOpen={isOpenDrawer}>
      <S.Container>
        <S.CloseButton onClick={toggleDrawer}>X</S.CloseButton>
        <S.FlexTitle>
          <p>Carrinho de compras</p>
        </S.FlexTitle>
        <S.ContainerCards>
          {shoppingCart.length > 0 ? (
            shoppingCart?.map((item) => (
              <CardCart key={item.id} product={item} />
            ))
          ) : (
            <p style={{ color: "#ffff" }}>Seu carrinho esta vazio.</p>
          )}
        </S.ContainerCards>
        <S.FlexTotal>
          <p>Total:</p>
          <p>{formatedTotal}</p>
        </S.FlexTotal>
        <S.ButtonBuy onClick={handleBuy}>Finalizar Compra</S.ButtonBuy>
      </S.Container>
    </S.DrawerContainer>
  );
};

export default DrawerComponent;
