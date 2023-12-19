
import Navigation from "../../componets/Navigation/Navigation";
import PlayList from "../../componets/PlayList/PlayList";
import MainSidebar from "../../componets/MainSidebar/MainSidebar";
import * as S from "./MainStyle";


export function Main() {
  return (
    <S.Main>
      <Navigation />
      <PlayList />
      <MainSidebar />
    </S.Main>
  );
}
