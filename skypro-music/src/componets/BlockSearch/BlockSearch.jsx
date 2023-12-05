import { useThemeContext } from "../../pages/Theme/ThemeContext";
import * as S from "./BlockSearchStyle";

// const S.CenterBlockSearch = S..div

function BlockSearch() {
  // const handelSearch= (event) =>{
  //   console.log(event.target.value);
  //   const foundTracks = runSearch(event.target.value)
  //   setTracks(foundTracks)
  // }
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
        // onChange={handelSearch}
      />
    </S.CenterBlockSearch>
  );
}
export default BlockSearch;
