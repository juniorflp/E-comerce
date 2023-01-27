import React from "react";
import HeaderComponent from "../Header";
import * as S from "./styles";

const Main: React.FC = () => {
  return (
    <>
      <S.Wraper>
        <HeaderComponent />
      </S.Wraper>
    </>
  );
};

export default Main;
