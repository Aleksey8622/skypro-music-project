import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useThemeContext } from "../../../pages/Theme/ThemeContext";
import { useMyFavoriteTracksQuery } from "../../../redux/apiMusic";
import { AuthContext } from "../../../store/AuthContext";
import { setFilters, setTrackListForFilter } from "../../../store/slice";
import BlockFilter from "../../BlockFilter/BlockFilter";
import BlockSearch from "../../BlockSearch/BlockSearch";
// import SkeletonTrack from "../../Skeletons/SkeletonTrack";
import * as S from "../PlayListStyle";
import Track from "../Tracks/Track";
const MyPlayList = () => {
  const { theme } = useThemeContext();
  const token = localStorage.getItem("access");
  const { logout } = useContext(AuthContext);
  const dispatch = useDispatch();
  const valueSearch = useSelector((state) => state.music.filters.search);
  const filtredDataRedux = useSelector((state) => state.music.filteredTracks);
  const initialTracks = useSelector((state) => state.music.tracksForFilter);
  const isFiltred = useSelector((state) => state.music.isFiltred);
  let newFiltredData = isFiltred ? filtredDataRedux : initialTracks;
  const {
    data,
    isLoading,
    error: likeError,
    error: dislikeError,
  } = useMyFavoriteTracksQuery({ token });

  useEffect(() => {
    dispatch(setTrackListForFilter(data || []));
    dispatch(setFilters({ nameFilter: "search", valueFilter: valueSearch }));
    if (
      (likeError && likeError.status === 401) ||
      (dislikeError && dislikeError.status === 401)
    ) {
      logout();
    }
  }, [dispatch, data, isLoading, valueSearch, likeError, dislikeError, logout]);

  return (
    <S.MainCenterblock>
      <BlockSearch />

      <S.CenterblockHeading theme={theme}>Мой плейлист</S.CenterblockHeading>
      {/* <h1 onClick={handelTrack}>Нажать</h1> */}
      {<MyPlayList /> ? null : <BlockFilter />}

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

        <S.ContentPlaylist theme={theme}>
          {isLoading ? (
            <p style={{ textAlign: "center" }}>Loading...</p>
          ) : (
            newFiltredData.map((item) => {
              return (
                <Track
                  // refetch={refetch}
                  key={item.id}
                  item={item}
                  {...item}
                  data={data}
                  isFavoriteLike={true}
                />
              );
            })
          )}
        </S.ContentPlaylist>
      </S.CenterblockContent>
    </S.MainCenterblock>
  );
};
export default MyPlayList;
