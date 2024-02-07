import { useDispatch} from "react-redux";
import { useThemeContext } from "../../pages/Theme/ThemeContext";
import { setFilters } from "../../store/slice";

import * as S from "./BlockSearchStyle";

// const S.CenterBlockSearch = S..div

function BlockSearch() {
  const { theme } = useThemeContext();
  const dispatch = useDispatch();

  const onChandeSearchValue = (value) => {
    dispatch(setFilters({ nameFilter: "search", valueFilter: value }));

    console.log(value);
  };
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
        onChange={(event) =>
          onChandeSearchValue(event.target.value.toLocaleLowerCase())
        }
      />
    </S.CenterBlockSearch>
  );
}
export default BlockSearch;
