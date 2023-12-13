import "react-loading-skeleton/dist/skeleton.css";
// import SkeletonTrack from "../../Skeletons/SkeletonTrack";
// import { useState, useEffect } from "react";
import * as S from "../PlayListStyle";
import moment from "moment";
import { useThemeContext } from "../../../pages/Theme/ThemeContext";
import { useDispatch } from "react-redux";
import { getAllTrack } from "../../../store/slice";

const Track = ({
  name,
  author,
  album,
  duration_in_seconds,
  track_file,
  id,
  allTracks
}) => {
  const dispach = useDispatch();

  const { theme } = useThemeContext();
  const formattedDuration = moment
    .utc(duration_in_seconds * 1000)
    .format("mm:ss");
  return (
    <S.PlaylistItem
      // onClick={() => setCurrentTrack({ name, author, album, track_file })}
      onClick={() =>
        dispach(
          getAllTrack({
            name,
            author,
            album,
            track_file,
            id,
            allTracks
          })
        )
      }
    >
      <S.PlaylistTrack>
        <S.TrackTitle>
          <S.TrackTitleImage theme={theme}>
            <S.TrackTitleSvg alt="music">
              <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
            </S.TrackTitleSvg>
          </S.TrackTitleImage>

          <div className="track__title-text">
            <S.TrackTitleLink theme={theme}>
              {name}
              <S.TrackTitleSpan></S.TrackTitleSpan>
            </S.TrackTitleLink>
          </div>
        </S.TrackTitle>

        <S.TrackAuthor>
          <S.TrackAuthorLink theme={theme}>{author}</S.TrackAuthorLink>
        </S.TrackAuthor>

        <S.TrackAlbum>
          <S.TrackAlbumLink theme={theme}>{album}</S.TrackAlbumLink>
        </S.TrackAlbum>
        <div className="track__time">
          <S.TrackTimeSvg alt="time">
            <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
          </S.TrackTimeSvg>
          <S.TrackTimeText>{formattedDuration}</S.TrackTimeText>
        </div>
      </S.PlaylistTrack>
    </S.PlaylistItem>
  );
};

export default Track;
