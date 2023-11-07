import React from "react";
import "react-loading-skeleton/dist/skeleton.css";
import SkeletonTrack from "../../Skeletons/SkeletonTrack";
import { useState, useEffect } from "react";
import * as S from "../PlayListStyle";

const Track = (props) => {
    
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

 
    return (
      <S.PlaylistItem>
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
                <S.TrackTitleLink href="http://">
                  {props.name} <S.TrackTitleSpan></S.TrackTitleSpan>
                </S.TrackTitleLink>
              )}
            </div>
          </S.TrackTitle>

          <S.TrackAuthor>
            {isLoading ? (
              <SkeletonTrack />
            ) : (
              <S.TrackAuthorLink href="http://">
                {props.singer}
              </S.TrackAuthorLink>
            )}
          </S.TrackAuthor>

          <S.TrackAlbum>
            {isLoading ? (
              <SkeletonTrack />
            ) : (
              <S.TrackAlbumLink href="http://">{props.album}</S.TrackAlbumLink>
            )}
          </S.TrackAlbum>
          <div className="track__time">
            <S.TrackTimeSvg alt="time">
              <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
            </S.TrackTimeSvg>
            <S.TrackTimeText>{props.time}</S.TrackTimeText>
          </div>
        </S.PlaylistTrack>
      </S.PlaylistItem>
    );
  
};

export default Track;
