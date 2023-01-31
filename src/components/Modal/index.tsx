import React from "react";
import ReactModal from "react-modal";
import { ModalState } from "../Main";
import * as S from "./styles";

interface IModal {
  closeModal: () => void;
  modalIsOpen: ModalState;
}

const Modal: React.FC<IModal> = ({ closeModal, modalIsOpen }) => {
  return (
    <div className="div-modal">
      <ReactModal
        isOpen={modalIsOpen.isOpen}
        onRequestClose={closeModal}
        style={{
          overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(23, 23, 23, 0.704)",
          },
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            width: "95%",
            maxWidth: "900px",
            borderRadius: "16px",
          },
        }}
      >
        {modalIsOpen && (
          <S.Container>
            <S.CloseButton onClick={closeModal}>X</S.CloseButton>
            <S.Flex>
              <S.WraperPhoto>
                <img
                  src={modalIsOpen.product?.photo}
                  width="100%"
                  height="100%"
                  alt={modalIsOpen.product?.name}
                />
              </S.WraperPhoto>
              <S.WraperDiscription>
                <h2>{modalIsOpen.product?.name}</h2>
                <h4>Marca: {modalIsOpen.product?.brand}</h4>
                <p>{modalIsOpen.product?.description}</p>
              </S.WraperDiscription>
            </S.Flex>
          </S.Container>
        )}
      </ReactModal>
    </div>
  );
};

export default Modal;
