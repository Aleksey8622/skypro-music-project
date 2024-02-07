import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useThemeContext } from "../../../pages/Theme/ThemeContext";
import { useMyFavoriteTracksQuery } from "../../../redux/apiMusic";
import { AuthContext } from "../../../store/AuthContext";
import {
  clearTheFilter,
  setTrackListFavoriteFilter
} from "../../../store/slice";
import BlockFilter from "../../BlockFilter/BlockFilter";
import BlockSearch from "../../BlockSearch/BlockSearch";
// import SkeletonTrack from "../../Skeletons/SkeletonTrack";
import * as S from "../PlayListStyle";
import Track from "../Tracks/Track";
const MyPlayList = () => {
  const favoriteTracksRedux = useSelector(
    (state) => state.music.filtredFavoriteTracks
  );
  const initialFavoriteTracks = useSelector(
    (state) => state.music.tracksFavoriteForFilter
  );
  const isFiltredFavorite = useSelector((state) => state.music.isFiltred);

  let favoriteData = isFiltredFavorite
    ? favoriteTracksRedux
    : initialFavoriteTracks;

  const { theme } = useThemeContext();
  const token = localStorage.getItem("access");
  const { logout } = useContext(AuthContext);
  const dispatch = useDispatch();

  const {
    data,
    isLoading,
    error: likeError,
    error: dislikeError,
  } = useMyFavoriteTracksQuery({ token });

  useEffect(() => {
    dispatch(setTrackListFavoriteFilter(data || []));
    dispatch(clearTheFilter());

    if (
      (likeError && likeError.status === 401) ||
      (dislikeError && dislikeError.status === 401)
    ) {
      logout();
    }
  }, [dispatch, data, isLoading, likeError, dislikeError, logout]);

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
          {favoriteData.length === 0 && (
            <p style={{ textAlign: "center" }}>
              В вашем плайлисте пока нет треков
            </p>
          )}
          {isLoading ? (
            <p style={{ textAlign: "center" }}>Loading...</p>
          ) : (
            favoriteData.map((item) => {
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
