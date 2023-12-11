// import "../../App.js";
// import React, { useState } from "react";
import Player from "../../componets/Player/Player";
import Navigation from "../../componets/Navigation/Navigation";
import PlayList from "../../componets/PlayList/PlayList";
import MainSidebar from "../../componets/MainSidebar/MainSidebar";
import * as S from "./MainStyle";
// import { useState } from "react";
import { useThemeContext } from "../Theme/ThemeContext";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export function Main() {
  const currentTrack = useSelector((state) => state.app.currentTrack);

  useEffect(() => {
    console.log(currentTrack);
  }, [currentTrack]);
  // const [currentTrack, setCurrentTrack] = useState(null);
  const { theme } = useThemeContext();
  return (
    <S.Wrapper>
      <S.Container theme={theme}>
        <S.Main>
          <Navigation />
          <PlayList
          // currentTrack={currentTrack}
          // setCurrentTrack={setCurrentTrack}
          />
          <MainSidebar />
        </S.Main>
        {currentTrack ? <Player /> : null}

        <footer className="footer"></footer>
      </S.Container>
    </S.Wrapper>
  );
}
