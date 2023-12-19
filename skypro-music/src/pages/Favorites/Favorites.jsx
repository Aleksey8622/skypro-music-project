// import { useSelector } from "react-redux";
import  MainSidebar  from "../../componets/MainSidebar/MainSidebar";
import Navigation from "../../componets/Navigation/Navigation";
import MyPlayList from "../../componets/PlayList/MyPlayList/MyPlayList";
// import PlayList from "../../componets/PlayList/PlayList";
// import Player from "../../componets/Player/Player";
// import BlockFilter from "../../componets/BlockFilter/BlockFilter";
// import BlockSearch from "../../componets/BlockSearch/BlockSearch";
import * as S from "../Main/MainStyle";
// import { useThemeContext } from "../Theme/ThemeContext";

export function Favorites() {
  // const currentTrack = useSelector((state) => state.music.currentTrack);
  // const { theme } = useThemeContext();
  return (
    <S.Main>
      <Navigation />
      <MyPlayList />
      <MainSidebar />
    </S.Main>
  );
}
