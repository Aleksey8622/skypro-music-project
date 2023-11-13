import "../../App.css";
// import React, { useState } from "react";
import Player from "../../componets/Player/Player";
import Navigation from "../../componets/Navigation/Navigation";
import PlayList from "../../componets/PlayList/PlayList";
import MainSidebar from "../../componets/MainSidebar/MainSidebar";
import * as S from "./MainStyle";
import { useState } from "react";

export function Main({ user, cancelHandler }) {
  const [currentTrack, setCurrentTrack] = useState(null);
  const [showPlayer, setShowPlayer] = useState(false);
  return (
    <S.Wrapper>
      <S.Container>
        <S.Main>
          <Navigation user={user} cancelHandler={cancelHandler} />
          <PlayList
            currentTrack={currentTrack}
            setCurrentTrack={setCurrentTrack}
            showPlayer={showPlayer}
            setShowPlayer={setShowPlayer}
          />
          <MainSidebar user={user} cancelHandler={cancelHandler} />
        </S.Main>
        {currentTrack && (
          <Player
            currentTrack={currentTrack}
            showPlayer={showPlayer}
            setShowPlayer={setShowPlayer}
          />
        )}

        <footer className="footer"></footer>
      </S.Container>
    </S.Wrapper>
  );
}
