import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import * as S from "../../pages/Main/MainStyle";
import { useThemeContext } from "../../pages/Theme/ThemeContext";
import Player from "../Player/Player";
const PageLayout = () => {
  const { theme } = useThemeContext();
  const currentTrack = useSelector((state) => state.music.currentTrack);

  return (
    <S.Wrapper>
      <S.Container theme={theme}>
        <Outlet />
        {currentTrack ? <Player /> : null}
        <footer className="footer"></footer>
      </S.Container>
    </S.Wrapper>
  );
};

export { PageLayout };
