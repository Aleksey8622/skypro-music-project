// import "../../App.js";
// import React, { useState } from "react";
import Player from "../../componets/Player/Player";
import Navigation from "../../componets/Navigation/Navigation";
import PlayList from "../../componets/PlayList/PlayList";
import MainSidebar from "../../componets/MainSidebar/MainSidebar";
import * as S from "./MainStyle";
import { useState } from "react";

export function Main() {
  const [currentTrack, setCurrentTrack] = useState(null);

  return (
    <S.Wrapper>
      <S.Container>
        <S.Main>
          <Navigation  />
          <PlayList
            currentTrack={currentTrack}
            setCurrentTrack={setCurrentTrack}
          />
          <MainSidebar  />
        </S.Main>
        {currentTrack && <Player currentTrack={currentTrack}  />}

        <footer className="footer"></footer>
      </S.Container>
    </S.Wrapper>
  );
}
