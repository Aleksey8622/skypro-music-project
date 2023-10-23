// import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Player from "./componets/Player/Player";
import Navigation from "./componets/Navigation/Navigation";
import PlayList from "./componets/PlayList/PlayList";
import MainSidebar from "./componets/MainSidebar/MainSidebar";
import * as S from "./AppStyle";
function App() {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Main>
          <Navigation />
          <PlayList />
          <MainSidebar />
        </S.Main>
        <Player />
        <footer className="footer"></footer>
      </S.Container>
    </S.Wrapper>
  );
}
export default App;
