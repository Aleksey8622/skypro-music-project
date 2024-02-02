import BlockFilter from "../BlockFilter/BlockFilter";
import BlockSearch from "../BlockSearch/BlockSearch";

import Track from "./Tracks/Track";

import "react-loading-skeleton/dist/skeleton.css";
import SkeletonTrack from "../Skeletons/SkeletonTrack";
import * as S from "./PlayListStyle";
// import { getTrack } from "../../api/api";
import { useThemeContext } from "../../pages/Theme/ThemeContext";
import { useAllTracksQuery } from "../../redux/apiMusic";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setFilters, setTrackListForFilter } from "../../store/slice";
function PlayList() {
  const { theme } = useThemeContext();
  const { data, isLoading } = useAllTracksQuery();
  const filtredDataRedux = useSelector((state) => state.music.filteredTracks);
  const initialTracks = useSelector((state) => state.music.tracksForFilter);
  const isFiltred = useSelector((state) => state.music.isFiltred);
  const valueSearch = useSelector((state) => state.music.filters.search);
  let newFiltredData = isFiltred ? filtredDataRedux : initialTracks;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTrackListForFilter(data || []));
    dispatch(setFilters({ nameFilter: "search", valueFilter: valueSearch }));
  }, [dispatch, data, isLoading, valueSearch]);

  return (
    <S.MainCenterblock>
      <BlockSearch />

      <S.CenterblockHeading theme={theme}>Треки</S.CenterblockHeading>
      {/* <h1 onClick={handelTrack}>Нажать</h1> */}

      <BlockFilter />
      <S.CenterblockContent>
        <S.ContentTitle>
          <S.TitleCol1>Трек</S.TitleCol1>
          <S.TitleCol2>ИСПОЛНИТЕЛЬ</S.TitleCol2>
          <S.TitleCol3>АЛЬБОМ</S.TitleCol3>
          <S.TitleCol4>
            <S.PlaylistTitleSvg alt="time">
              <use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
            </S.PlaylistTitleSvg>
          </S.TitleCol4>
        </S.ContentTitle>
        {/* {Error ? (
          <p>Не удалось загрузить плейлист, попробуйте позже</p>
        ) : null} */}
        <S.ContentPlaylist theme={theme}>
          {isLoading ? (
            <SkeletonTrack />
          ) : (
            newFiltredData.map((item) => {
              return (
                <Track
                  // refetch={refetch}
                  key={item.id}
                  item={item}
                  {...item}
                  data={data}
                  isFavoriteLike={false}
                />
              );
            })
          )}
        </S.ContentPlaylist>
      </S.CenterblockContent>
    </S.MainCenterblock>
  );
}

export default PlayList;
