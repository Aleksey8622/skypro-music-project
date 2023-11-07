import "../../App.css";
import React from "react";
import Player from "../../componets/Player/Player";
import Navigation from "../../componets/Navigation/Navigation";
import PlayList from "../../componets/PlayList/PlayList";
import MainSidebar from "../../componets/MainSidebar/MainSidebar";
import * as S from "./MainStyle";

export function Main({ user, cancelHandler }) {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Main>
          <Navigation user={user} cancelHandler={cancelHandler} />
          <PlayList />
          <MainSidebar user={user} cancelHandler={cancelHandler} />
        </S.Main>
        <Player />
        <footer className="footer"></footer>
      </S.Container>
    </S.Wrapper>
  );
}
