// import "../../App.js";

import MainSidebar from "../../componets/MainSidebar/MainSidebar";
import Navigation from "../../componets/Navigation/Navigation";
import PlayListCategory from "../../componets/PlayListCategory/PlayListCategory";
import * as S from "../Main/MainStyle";

// import { useParams } from "react-router-dom";
// import { useGetSelectionCategoryQuery } from "../../redux/apiMusic";

export const Category = () => {
  return (
    <S.Main>
      <Navigation />
      <PlayListCategory />
      <MainSidebar />
    </S.Main>
  );
};
