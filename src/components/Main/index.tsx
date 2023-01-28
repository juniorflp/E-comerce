import Image from "next/image";
import React, { useEffect, useState } from "react";
import { IshooppingCart, Product } from "../../@types/api/products-interface";
import {
  addToCart,
  getProducts,
  removeFromCart,
} from "../../features/products/productsSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import HeaderComponent from "../Header";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

import * as S from "./styles";

const Main: React.FC = () => {
  const dispatch = useAppDispatch();
  const { products, shoppingCart, numberOfItems } = useAppSelector(
    (state) => state
  );
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  useEffect(() => {
    dispatch(getProducts({ orderBy: "DESC", sortBy: "id", page: 1, rows: 8 }));
  }, []);

  const newArrayProducts = products?.map((product) => {
    return { ...product, price: Number(product.price) };
  });

  const totalCart = shoppingCart.reduce((total, current) => {
    return total + Number(current.price) * current.quantity;
  }, 0);

  const formatedTotal = totalCart.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <>
      <button onClick={toggleDrawer}>Show</button>
      <Drawer open={isOpen} onClose={toggleDrawer} direction="right" size={500}>
        <div style={{ width: "100%", height: "100%", backgroundColor: "blue" }}>
          estilo aqui
        </div>
      </Drawer>
      <S.Wraper>
        <HeaderComponent numberOfProducts={numberOfItems} />
        <S.Container>
          <S.ContainerCard>
            {newArrayProducts?.map((item) => (
              <S.Card key={item.id}>
                <img src={item.photo} width="100%" alt={item.name} />
                <p>{item.name}</p>
                <p>{item.brand}</p>
                <p>{item.price}</p>
                <button onClick={() => dispatch(addToCart(item.id))}>
                  add
                </button>
              </S.Card>
            ))}
          </S.ContainerCard>
          <h2>Shopping cart total: {formatedTotal}</h2>
          <S.ContainerCard>
            {shoppingCart?.map((item) => (
              <S.Card key={item.id}>
                <img src={item.photo} width="100%" alt={item.name} />
                <p>{item.name}</p>
                <p>{item.brand}</p>
                <p>{item.price}</p>
                <p>{item.quantity}</p>
                <button onClick={() => dispatch(removeFromCart(item.id))}>
                  remove
                </button>
                {/* <button onClick={() => handleAddToCart(item.id)}>ad</button> */}
                <p>total:{item.quantity * Number(item.price)}</p>
              </S.Card>
            ))}
          </S.ContainerCard>
        </S.Container>
      </S.Wraper>
    </>
  );
};

export default Main;
