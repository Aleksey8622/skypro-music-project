import React from "react";
import "react-loading-skeleton/dist/skeleton.css";
import SkeletonTrack from "../../Skeletons/SkeletonTrack";
import { useState, useEffect } from "react";
import * as S from "../PlayListStyle";

const Track = ({ currentTrack, setCurrentTrack }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  return (
    <S.PlaylistItem onClick={setCurrentTrack({})}>
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
                {currentTrack.name}
                <S.TrackTitleSpan></S.TrackTitleSpan>
              </S.TrackTitleLink>
            )}
          </div>
        </S.TrackTitle>

        <S.TrackAuthor>
          {isLoading ? (
            <SkeletonTrack />
          ) : (
            <S.TrackAuthorLink>{currentTrack.author}</S.TrackAuthorLink>
          )}
        </S.TrackAuthor>

        <S.TrackAlbum>
          {isLoading ? (
            <SkeletonTrack />
          ) : (
            <S.TrackAlbumLink>{currentTrack.album}</S.TrackAlbumLink>
          )}
        </S.TrackAlbum>
        <div className="track__time">
          <S.TrackTimeSvg alt="time">
            <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
          </S.TrackTimeSvg>
          <S.TrackTimeText>{currentTrack.duration_in_seconds}</S.TrackTimeText>
        </div>
      </S.PlaylistTrack>
    </S.PlaylistItem>
  );
};

export default Track;
