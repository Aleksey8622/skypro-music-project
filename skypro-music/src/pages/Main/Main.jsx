// import "../../App.js";
// import React, { useState } from "react";
// import Player from "../../componets/Player/Player";
import Navigation from "../../componets/Navigation/Navigation";
import PlayList from "../../componets/PlayList/PlayList";
import MainSidebar from "../../componets/MainSidebar/MainSidebar";
import * as S from "./MainStyle";
// import { useState } from "react";
// import { useThemeContext } from "../Theme/ThemeContext";
// import { useSelector } from "react-redux";
// import { useEffect } from "react";

export function Main() {
  // useEffect(() => {
  //   console.log(currentTrack);
  // }, [currentTrack]);

  // const { theme } = useThemeContext();
  return (
    <S.Main>
      <Navigation />
      <PlayList />
      <MainSidebar />
    </S.Main>
  );
}
