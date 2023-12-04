import BurgerMenu from "../BurgerMenu/BurgerMenu";
import React from "react";
import * as S from "./NavigationStyle";
import { useThemeContext } from "../../pages/Theme/ThemeContext";

const { useState } = React;

function Navigation({user, cancelHandler}) {
  const [show, setShow] = useState(false);
  const {theme} = useThemeContext()
  const showMenu = () => setShow(!show);
  return (
    <S.Nav theme={theme}  style={{ backgroundColor: theme.background, color: theme.color }}>
      <S.Logo>
        <S.LogoImg src={theme.iconLogo} alt="logo" />
      </S.Logo>
      <S.NavBurger onClick={showMenu}>
        <S.NavBurgerLine></S.NavBurgerLine>
        <S.NavBurgerLine></S.NavBurgerLine>
        <S.NavBurgerLine></S.NavBurgerLine>
      </S.NavBurger>
      {show && (
        <S.NavMenu>
          <BurgerMenu user={user} cancelHandler={cancelHandler} />
        </S.NavMenu>
      )}
    </S.Nav>
  );
}
export default Navigation;
