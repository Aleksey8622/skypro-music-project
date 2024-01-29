import "react-loading-skeleton/dist/skeleton.css";
// import SkeletonTrack from "../../Skeletons/SkeletonTrack";
// import { useState, useEffect } from "react";
import * as S from "../PlayListStyle";
import moment from "moment";
import { useThemeContext } from "../../../pages/Theme/ThemeContext";
import { useDispatch, useSelector } from "react-redux";
import { getAllTrack } from "../../../store/slice";
import {
  useAddMyTracksMutation,
  useAllTracksQuery,
  useDeleteMyTrackMutation,
} from "../../../redux/apiMusic";
import { useContext, useMemo } from "react";
import { AuthContext } from "../../../store/AuthContext";

const Track = ({
  name,
  author,
  album,
  duration_in_seconds,
  track_file,
  id,
  data,
  item,
  stared_user,
  isFavoriteLike,
  isCategoryLike,
  
}) => {
  const { user, logout } = useContext(AuthContext);
  const dispach = useDispatch();
  const $isPlaying = useSelector((state) => state.music.$isPlaying);
  const currentTrack = useSelector((state) => state.music.currentTrack);
  const { theme } = useThemeContext();
  const formattedDuration = moment
    .utc(duration_in_seconds * 1000)
    .format("mm:ss");

  const [addMyTracks, { error: likeError }] = useAddMyTracksMutation({});
  const [deleteMytrack, { error: dislikeError }] = useDeleteMyTrackMutation({});
  
  const { refetch } = useAllTracksQuery();
  if (
    (likeError && likeError.status === 401) ||
    (dislikeError && dislikeError.status === 401)
  ) {
    logout();
  }

  const isLiked = useMemo(
    () => stared_user?.some((el) => el.id === user.id),
    [stared_user, user]
  );
  const handleAddMyTrack = async (event) => {
    try {
      event.stopPropagation();
      const token = localStorage.getItem("access");
      await addMyTracks({ id, token }).unwrap();
      refetch();
    } catch (error) {}
  };

  const handleDeleteMyTrack = async (event) => {
    try {
      event.stopPropagation();
      const token = localStorage.getItem("access");
      await deleteMytrack({ id, token }).unwrap();
      refetch();
    } catch (error) {}
  };

  return (
    <S.PlaylistItem
    // onClick={() => setCurrentTrack({ name, author, album, track_file })}
    >
      <S.PlaylistTrack key={item.id}>
        <S.TrackTitle>
          <S.TrackTitleImage theme={theme}>
            {currentTrack && currentTrack.id === item.id ? (
              <S.TrackPlayingDot $isPlaying={$isPlaying}></S.TrackPlayingDot>
            ) : (
              <S.TrackTitleSvg alt="music">
                <use xlinkHref="/img/icon/sprite.svg#icon-note"></use>
              </S.TrackTitleSvg>
            )}
          </S.TrackTitleImage>

          <S.TrackTitleLink
            theme={theme}
            onClick={() =>
              dispach(
                getAllTrack({
                  name,
                  author,
                  album,
                  track_file,
                  id,
                  data,
                })
              )
            }
          >
            {name}
            <S.TrackTitleSpan></S.TrackTitleSpan>
          </S.TrackTitleLink>
        </S.TrackTitle>

        <S.TrackAuthor>
          <S.TrackAuthorLink theme={theme}>{author}</S.TrackAuthorLink>
        </S.TrackAuthor>

        <S.TrackAlbum>
          <S.TrackAlbumLink theme={theme}>{album}</S.TrackAlbumLink>
        </S.TrackAlbum>
        <div className="track__time">
          {isLiked || isFavoriteLike || isCategoryLike ? (
            <S.TrackTimeSvg alt="time" onClick={handleDeleteMyTrack}>
              <use xlinkHref="/img/icon/sprite.svg#icon-like-active"></use>
            </S.TrackTimeSvg>
          ) : (
            <S.TrackTimeSvg alt="time" onClick={handleAddMyTrack}>
              <use xlinkHref="/img/icon/sprite.svg#icon-like"></use>
            </S.TrackTimeSvg>
          )}
          <S.TrackTimeText>{formattedDuration}</S.TrackTimeText>
        </div>
      </S.PlaylistTrack>
    </S.PlaylistItem>
  );
};

export default Track;
