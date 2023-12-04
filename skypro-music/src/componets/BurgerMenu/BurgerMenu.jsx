import * as S from "./BurgerStyle";
import { AuthContext } from "../../store/AuthContext";
import { useContext } from "react";
import { useThemeContext } from "../../pages/Theme/ThemeContext";
function BurgerMenu() {
  const { logout } = useContext(AuthContext);
  const { theme, toggleTheme } = useThemeContext();
  return (
    <S.BurgerMenuList style={{ color: theme.color }}>
      <S.MenuItem >
        <S.MenuLink
        theme={theme}
          to="/"
          style={({ isActive }) => ({
            textDecoration: isActive ? "underline" : "none",
        
          })}
        >
          Главное
        </S.MenuLink>
      </S.MenuItem>
      <S.MenuItem>
        <S.MenuLink
        theme={theme}
          to={"/favorites"}
        >
          Мой плейлист
        </S.MenuLink>
      </S.MenuItem>
      <S.MenuItem>
        <S.MenuLink 
        theme={theme}
          onClick={() => logout()}
        >
          Выйти
        </S.MenuLink>
      </S.MenuItem>
      <S.MenuItem onClick={toggleTheme}>{theme.iconTheme}</S.MenuItem>
    </S.BurgerMenuList>
  );
}
export default BurgerMenu;
