// import { useSelector } from "react-redux";
import MainSidebar from "../../componets/MainSidebar/MainSidebar";
import Navigation from "../../componets/Navigation/Navigation";
import MyPlayList from "../../componets/PlayList/MyPlayList/MyPlayList";
import * as S from "../Main/MainStyle";

export function Favorites() {
  return (
    <S.Main>
      <Navigation />
      <MyPlayList  />
      <MainSidebar />
    </S.Main>
  );
}
