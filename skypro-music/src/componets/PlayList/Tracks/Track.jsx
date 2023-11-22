import React from "react";
import "react-loading-skeleton/dist/skeleton.css";
import SkeletonTrack from "../../Skeletons/SkeletonTrack";
// import { useState, useEffect } from "react";
import * as S from "../PlayListStyle";
import moment from "moment"


const Track = ({
  name,
  author,
  album,
  duration_in_seconds,
  setCurrentTrack,
  isLoading,
  track_file
}) => {
 

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 5000);
  // }, []);
  const formattedDuration = moment.utc(duration_in_seconds * 1000).format("mm:ss") 
  return (
    <S.PlaylistItem onClick={() => setCurrentTrack({ name, author, album, track_file })}>
      <S.PlaylistTrack>
        <S.TrackTitle>
          <S.TrackTitleImage>
            <S.TrackTitleSvg alt="music">
              <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
            </S.TrackTitleSvg>
          </S.TrackTitleImage>

          <div className="track__title-text">
            {isLoading ? (
              <SkeletonTrack />
            ) : (
              <S.TrackTitleLink>
                {name}
                <S.TrackTitleSpan></S.TrackTitleSpan>
              </S.TrackTitleLink>
            )}
          </div>
        </S.TrackTitle>

        <S.TrackAuthor>
          {isLoading ? (
            <SkeletonTrack />
          ) : (
            <S.TrackAuthorLink>{author}</S.TrackAuthorLink>
          )}
        </S.TrackAuthor>

        <S.TrackAlbum>
          {isLoading ? (
            <SkeletonTrack />
          ) : (
            <S.TrackAlbumLink>{album}</S.TrackAlbumLink>
          )}
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
