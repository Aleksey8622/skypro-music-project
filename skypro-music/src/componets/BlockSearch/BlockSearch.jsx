import { useThemeContext } from "../../pages/Theme/ThemeContext";

import * as S from "./BlockSearchStyle";

// const S.CenterBlockSearch = S..div

function BlockSearch({ setSearch,  }) {
  const { theme } = useThemeContext();

  return (
    <S.CenterBlockSearch theme={theme}>
      <S.SearchSvg theme={theme}>
        <use xlinkHref={theme.iconSearch}></use>
      </S.SearchSvg>
      <S.SearchText
        theme={theme}
        type="search"
        placeholder="Поиск"
        name="search"
        onChange={(event) => setSearch(event.target.value.toLocaleLowerCase())}
      />
    </S.CenterBlockSearch>
  );
}
export default BlockSearch;
