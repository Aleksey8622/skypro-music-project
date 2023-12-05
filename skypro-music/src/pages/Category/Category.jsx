// import "../../App.js";

import * as S from "../Main/MainStyle";

import { useParams } from "react-router-dom";

export const Category = () => {
  const params = useParams();

  const ArrCategorys = [
    {
      id: 1,
      title: "Плейлист дня",
    },
    {
      id: 2,
      title: "100 хитов",
    },
    {
      id: 3,
      title: "Инди-заряд",
    },
  ];
  const category = ArrCategorys.find(
    (categor) => categor.id === Number(params.id)
  );
  return (
    <S.Wrapper>
      <S.Container>{category.title}</S.Container>
    </S.Wrapper>
  );
};
