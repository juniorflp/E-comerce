import React from "react";
import * as S from "./styles";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonCards: React.FC = () => {
  return (
    <S.ContainerCard>
      <S.Cards>
        <Skeleton height={333} />
      </S.Cards>
      <S.Cards>
        <Skeleton height={333} />
      </S.Cards>
      <S.Cards>
        <Skeleton height={333} />
      </S.Cards>
      <S.Cards>
        <Skeleton height={333} />
      </S.Cards>
      <S.Cards>
        <Skeleton height={333} />
      </S.Cards>
      <S.Cards>
        <Skeleton height={333} />
      </S.Cards>
      <S.Cards>
        <Skeleton height={333} />
      </S.Cards>
      <S.Cards>
        <Skeleton height={333} />
      </S.Cards>
    </S.ContainerCard>
  );
};

export default SkeletonCards;
