import {
  addFromLocalStorage,
  addToCart,
  getProducts,
  removeFromCart,
} from "../../features/products/productsSlice";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import HeaderComponent from "../Header";
import * as S from "./styles";
import CardProduct from "../Card";
import SkeletonCards from "../Skeleton";
import Modal from "../Modal";
import { IshooppingCart, Product } from "../../@types/api/products-interface";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DrawerComponent from "../Drawer";

export interface ModalState {
  isOpen: boolean;
  product?: Product;
}

const Main: React.FC = () => {
  const dispatch = useAppDispatch();
  const { products, numberOfItems, loading } = useAppSelector((state) => state);
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const toggleDrawer = () => {
    setIsOpenDrawer((prevState) => !prevState);
  };
  const [modalIsOpen, setIsOpenModal] = useState<ModalState>({
    isOpen: false,
    product: undefined,
  });

  const openModal = (id: number, product: Product) => {
    if (id === product.id) {
      setIsOpenModal({ isOpen: true, product: product });
    }
  };
  const closeModal = () => {
    setIsOpenModal({ isOpen: false });
  };

  const handleAddToCart = (id: number) => {
    dispatch(addToCart(id));
    toast("👍 Item adicionado ao carrinho!");
  };

  useEffect(() => {
    dispatch(getProducts({ orderBy: "DESC", sortBy: "id", page: 1, rows: 8 }));

    const arrayAsString = localStorage.getItem("products");
    if (arrayAsString) {
      const arrayOfObjects: IshooppingCart[] = JSON.parse(arrayAsString);
      dispatch(addFromLocalStorage(arrayOfObjects));
    }
  }, []);

  const newArrayProducts = products?.map((product) => {
    return { ...product, price: Number(product.price) };
  });

  return (
    <>
      <S.Wraper>
        <DrawerComponent
          isOpenDrawer={isOpenDrawer}
          toggleDrawer={() => toggleDrawer()}
        />
        <HeaderComponent
          numberOfProducts={numberOfItems}
          handleClick={toggleDrawer}
        />

        <S.Container>
          <S.ContainerCard>
            {!loading ? (
              newArrayProducts?.map((item) => (
                <CardProduct
                  key={item.id}
                  handleClick={() => handleAddToCart(item.id)}
                  openModal={() => openModal(item.id, item)}
                  product={item}
                />
              ))
            ) : (
              <SkeletonCards />
            )}
          </S.ContainerCard>
        </S.Container>
      </S.Wraper>
      <ToastContainer autoClose={2000} position="bottom-left" />
      <Modal closeModal={() => closeModal()} modalIsOpen={modalIsOpen} />
      <S.Footer>MKS sistemas © Todos os direitos reservados</S.Footer>
    </>
  );
};

export default Main;
