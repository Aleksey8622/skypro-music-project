import * as S from "./BurgerStyle";
import {AuthContext} from "../../store/AuthContext"
import { useContext } from "react";
function BurgerMenu() {
  const { logout } = useContext(AuthContext);
  return (
    <S.BurgerMenuList>
      <S.MenuItem>
        <S.MenuLink
          to="/"
          style={({ isActive }) => ({
            textDecoration: isActive ? "underline" : "none",
          })}
        >
          Главное
        </S.MenuLink>
      </S.MenuItem>
      <S.MenuItem>
        <S.MenuLink to={"/favorites"}>Мой плейлист</S.MenuLink>
      </S.MenuItem>
      <S.MenuItem>
        <S.MenuLink onClick={()=> logout()}>
          Выйти
        </S.MenuLink>
      </S.MenuItem>
    </S.BurgerMenuList>
  );
}
export default BurgerMenu;
