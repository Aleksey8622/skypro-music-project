import BlockFilter from "../BlockFilter/BlockFilter";
import BlockSearch from "../BlockSearch/BlockSearch";
import React from "react";
import { useState, useEffect } from "react";
import "react-loading-skeleton/dist/skeleton.css";
import SkeletonTrack from "../SkeletonTrack";
import * as S from "./PlayListStyle";

function PlayList() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  return (
    <S.MainCenterblock>
      <BlockSearch />
      <S.CenterblockHeading>Треки</S.CenterblockHeading>
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
        <S.ContentPlaylist>
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
                      Guilt <S.TrackTitleSpan></S.TrackTitleSpan>
                    </S.TrackTitleLink>
                  )}
                </div>
              </S.TrackTitle>

              <S.TrackAuthor>
                {isLoading ? (
                  <SkeletonTrack />
                ) : (
                  <S.TrackAuthorLink href="http://">Nero</S.TrackAuthorLink>
                )}
              </S.TrackAuthor>

              <S.TrackAlbum>
                {isLoading ? (
                  <SkeletonTrack />
                ) : (
                  <S.TrackAlbumLink href="http://">
                    Welcome Reality
                  </S.TrackAlbumLink>
                )}
              </S.TrackAlbum>
              <div className="track__time">
                <S.TrackTimeSvg alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                </S.TrackTimeSvg>
                <S.TrackTimeText>4:44</S.TrackTimeText>
              </div>
            </S.PlaylistTrack>
          </S.PlaylistItem>

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
                      I’m Fire <S.TrackTitleSpan></S.TrackTitleSpan>
                    </S.TrackTitleLink>
                  )}
                </div>
              </S.TrackTitle>

              <S.TrackAuthor>
                {isLoading ? (
                  <SkeletonTrack />
                ) : (
                  <S.TrackAuthorLink href="http://">
                    Ali Bakgor
                  </S.TrackAuthorLink>
                )}
              </S.TrackAuthor>

              <S.TrackAlbum>
                {isLoading ? (
                  <SkeletonTrack />
                ) : (
                  <S.TrackAlbumLink href="http://">I’m Fire</S.TrackAlbumLink>
                )}
              </S.TrackAlbum>
              <div className="track__time">
                <S.TrackTimeSvg alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                </S.TrackTimeSvg>
                <S.TrackTimeText>2:22</S.TrackTimeText>
              </div>
            </S.PlaylistTrack>
          </S.PlaylistItem>

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
                      Non Stop <S.TrackTitleSpan></S.TrackTitleSpan>
                    </S.TrackTitleLink>
                  )}
                </div>
              </S.TrackTitle>

              <S.TrackAuthor>
                {isLoading ? (
                  <SkeletonTrack />
                ) : (
                  <S.TrackAuthorLink href="http://">
                    Стоункат, Psychopath
                  </S.TrackAuthorLink>
                )}
              </S.TrackAuthor>

              <S.TrackAlbum>
                {isLoading ? (
                  <SkeletonTrack />
                ) : (
                  <S.TrackAlbumLink href="http://">Non Stop</S.TrackAlbumLink>
                )}
              </S.TrackAlbum>
              <div className="track__time">
                <S.TrackTimeSvg alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                </S.TrackTimeSvg>
                <S.TrackTimeText>2:22</S.TrackTimeText>
              </div>
            </S.PlaylistTrack>
          </S.PlaylistItem>

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
                      Run Run <S.TrackTitleSpan></S.TrackTitleSpan>
                    </S.TrackTitleLink>
                  )}
                </div>
              </S.TrackTitle>

              <S.TrackAuthor>
                {isLoading ? (
                  <SkeletonTrack />
                ) : (
                  <S.TrackAuthorLink href="http://">
                    Jaded, Will Clarke, AR/CO
                  </S.TrackAuthorLink>
                )}
              </S.TrackAuthor>

              <S.TrackAlbum>
                {isLoading ? (
                  <SkeletonTrack />
                ) : (
                  <S.TrackAlbumLink href="http://">Run Run</S.TrackAlbumLink>
                )}
              </S.TrackAlbum>
              <div className="track__time">
                <S.TrackTimeSvg alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                </S.TrackTimeSvg>
                <S.TrackTimeText>2:54</S.TrackTimeText>
              </div>
            </S.PlaylistTrack>
          </S.PlaylistItem>

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
                      Mucho Bien{" "}
                      <S.TrackTitleSpan>(Hi Profile Remix)</S.TrackTitleSpan>
                    </S.TrackTitleLink>
                  )}
                </div>
              </S.TrackTitle>

              <S.TrackAuthor>
                {isLoading ? (
                  <SkeletonTrack />
                ) : (
                  <S.TrackAuthorLink href="http://">
                    HYBIT, Mr. Black, Offer Nissim, Hi Profile
                  </S.TrackAuthorLink>
                )}
              </S.TrackAuthor>

              <S.TrackAlbum>
                {isLoading ? (
                  <SkeletonTrack />
                ) : (
                  <S.TrackAlbumLink href="http://">Mucho Bien</S.TrackAlbumLink>
                )}
              </S.TrackAlbum>
              <div className="track__time">
                <S.TrackTimeSvg alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                </S.TrackTimeSvg>
                <S.TrackTimeText>3:41</S.TrackTimeText>
              </div>
            </S.PlaylistTrack>
          </S.PlaylistItem>

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
                      Knives n Cherries
                      <S.TrackTitleSpan></S.TrackTitleSpan>
                    </S.TrackTitleLink>
                  )}
                </div>
              </S.TrackTitle>

              <S.TrackAuthor>
                {isLoading ? (
                  <SkeletonTrack />
                ) : (
                  <S.TrackAuthorLink href="http://">minthaze</S.TrackAuthorLink>
                )}
              </S.TrackAuthor>

              <S.TrackAlbum>
                {isLoading ? (
                  <SkeletonTrack />
                ) : (
                  <S.TrackAlbumLink href="http://">
                    Captivating
                  </S.TrackAlbumLink>
                )}
              </S.TrackAlbum>
              <div className="track__time">
                <S.TrackTimeSvg alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                </S.TrackTimeSvg>
                <S.TrackTimeText>1:48</S.TrackTimeText>
              </div>
            </S.PlaylistTrack>
          </S.PlaylistItem>

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
                      Knives n Cherries
                      <S.TrackTitleSpan></S.TrackTitleSpan>
                    </S.TrackTitleLink>
                  )}
                </div>
              </S.TrackTitle>

              <S.TrackAuthor>
                {isLoading ? (
                  <SkeletonTrack />
                ) : (
                  <S.TrackAuthorLink href="http://">minthaze</S.TrackAuthorLink>
                )}
              </S.TrackAuthor>

              <S.TrackAlbum>
                {isLoading ? (
                  <SkeletonTrack />
                ) : (
                  <S.TrackAlbumLink href="http://">
                    Captivating
                  </S.TrackAlbumLink>
                )}
              </S.TrackAlbum>
              <div className="track__time">
                <S.TrackTimeSvg alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                </S.TrackTimeSvg>
                <S.TrackTimeText>1:48</S.TrackTimeText>
              </div>
            </S.PlaylistTrack>
          </S.PlaylistItem>

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
                      Knives n Cherries
                      <S.TrackTitleSpan></S.TrackTitleSpan>
                    </S.TrackTitleLink>
                  )}
                </div>
              </S.TrackTitle>

              <S.TrackAuthor>
                {isLoading ? (
                  <SkeletonTrack />
                ) : (
                  <S.TrackAuthorLink href="http://">minthaze</S.TrackAuthorLink>
                )}
              </S.TrackAuthor>

              <S.TrackAlbum>
                {isLoading ? (
                  <SkeletonTrack />
                ) : (
                  <S.TrackAlbumLink href="http://">
                    Captivating
                  </S.TrackAlbumLink>
                )}
              </S.TrackAlbum>
              <div className="track__time">
                <S.TrackTimeSvg alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                </S.TrackTimeSvg>
                <S.TrackTimeText>1:48</S.TrackTimeText>
              </div>
            </S.PlaylistTrack>
          </S.PlaylistItem>

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
                      Knives n Cherries
                      <S.TrackTitleSpan></S.TrackTitleSpan>
                    </S.TrackTitleLink>
                  )}
                </div>
              </S.TrackTitle>

              <S.TrackAuthor>
                {isLoading ? (
                  <SkeletonTrack />
                ) : (
                  <S.TrackAuthorLink href="http://">minthaze</S.TrackAuthorLink>
                )}
              </S.TrackAuthor>

              <S.TrackAlbum>
                {isLoading ? (
                  <SkeletonTrack />
                ) : (
                  <S.TrackAlbumLink href="http://">
                    Captivating
                  </S.TrackAlbumLink>
                )}
              </S.TrackAlbum>
              <div className="track__time">
                <S.TrackTimeSvg alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                </S.TrackTimeSvg>
                <S.TrackTimeText>1:48</S.TrackTimeText>
              </div>
            </S.PlaylistTrack>
          </S.PlaylistItem>

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
                      Knives n Cherries
                      <S.TrackTitleSpan></S.TrackTitleSpan>
                    </S.TrackTitleLink>
                  )}
                </div>
              </S.TrackTitle>

              <S.TrackAuthor>
                {isLoading ? (
                  <SkeletonTrack />
                ) : (
                  <S.TrackAuthorLink href="http://">minthaze</S.TrackAuthorLink>
                )}
              </S.TrackAuthor>

              <S.TrackAlbum>
                {isLoading ? (
                  <SkeletonTrack />
                ) : (
                  <S.TrackAlbumLink href="http://">
                    Captivating
                  </S.TrackAlbumLink>
                )}
              </S.TrackAlbum>
              <div className="track__time">
                <S.TrackTimeSvg alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                </S.TrackTimeSvg>
                <S.TrackTimeText>1:48</S.TrackTimeText>
              </div>
            </S.PlaylistTrack>
          </S.PlaylistItem>

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
                      Knives n Cherries
                      <S.TrackTitleSpan></S.TrackTitleSpan>
                    </S.TrackTitleLink>
                  )}
                </div>
              </S.TrackTitle>

              <S.TrackAuthor>
                {isLoading ? (
                  <SkeletonTrack />
                ) : (
                  <S.TrackAuthorLink href="http://">minthaze</S.TrackAuthorLink>
                )}
              </S.TrackAuthor>

              <S.TrackAlbum>
                {isLoading ? (
                  <SkeletonTrack />
                ) : (
                  <S.TrackAlbumLink href="http://">
                    Captivating
                  </S.TrackAlbumLink>
                )}
              </S.TrackAlbum>
              <div className="track__time">
                <S.TrackTimeSvg alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                </S.TrackTimeSvg>
                <S.TrackTimeText>1:48</S.TrackTimeText>
              </div>
            </S.PlaylistTrack>
          </S.PlaylistItem>

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
                      Knives n Cherries
                      <S.TrackTitleSpan></S.TrackTitleSpan>
                    </S.TrackTitleLink>
                  )}
                </div>
              </S.TrackTitle>

              <S.TrackAuthor>
                {isLoading ? (
                  <SkeletonTrack />
                ) : (
                  <S.TrackAuthorLink href="http://">minthaze</S.TrackAuthorLink>
                )}
              </S.TrackAuthor>

              <S.TrackAlbum>
                {isLoading ? (
                  <SkeletonTrack />
                ) : (
                  <S.TrackAlbumLink href="http://">
                    Captivating
                  </S.TrackAlbumLink>
                )}
              </S.TrackAlbum>
              <div className="track__time">
                <S.TrackTimeSvg alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                </S.TrackTimeSvg>
                <S.TrackTimeText>1:48</S.TrackTimeText>
              </div>
            </S.PlaylistTrack>
          </S.PlaylistItem>

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
                      How Deep Is Your Love{" "}
                      <S.TrackTitleSpan></S.TrackTitleSpan>
                    </S.TrackTitleLink>
                  )}
                </div>
              </S.TrackTitle>

              <S.TrackAuthor>
                {isLoading ? (
                  <SkeletonTrack />
                ) : (
                  <S.TrackAuthorLink href="http://">
                    Calvin Harris, Disciples
                  </S.TrackAuthorLink>
                )}
              </S.TrackAuthor>

              <S.TrackAlbum>
                {isLoading ? (
                  <SkeletonTrack />
                ) : (
                  <S.TrackAlbumLink href="http://">
                    How Deep Is Your Love
                  </S.TrackAlbumLink>
                )}
              </S.TrackAlbum>
              <div className="track__time">
                <S.TrackTimeSvg alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                </S.TrackTimeSvg>
                <S.TrackTimeText>3:32</S.TrackTimeText>
              </div>
            </S.PlaylistTrack>
          </S.PlaylistItem>

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
                      Morena <S.TrackTitleSpan></S.TrackTitleSpan>
                    </S.TrackTitleLink>
                  )}
                </div>
              </S.TrackTitle>

              <S.TrackAuthor>
                {isLoading ? (
                  <SkeletonTrack />
                ) : (
                  <S.TrackAuthorLink href="http://">
                    Tom Boxer
                  </S.TrackAuthorLink>
                )}
              </S.TrackAuthor>

              <S.TrackAlbum>
                {isLoading ? (
                  <SkeletonTrack />
                ) : (
                  <S.TrackAlbumLink href="http://">
                    Soundz Made in Romania
                  </S.TrackAlbumLink>
                )}
              </S.TrackAlbum>
              <div className="track__time">
                <S.TrackTimeSvg alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                </S.TrackTimeSvg>
                <S.TrackTimeText>3:36</S.TrackTimeText>
              </div>
            </S.PlaylistTrack>
          </S.PlaylistItem>

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
                      Morena<S.TrackTitleSpan></S.TrackTitleSpan>
                    </S.TrackTitleLink>
                  )}
                </div>
              </S.TrackTitle>

              <S.TrackAuthor>
                {isLoading ? (
                  <SkeletonTrack />
                ) : (
                  <S.TrackAuthorLink href="http://">
                    Tom Boxer
                  </S.TrackAuthorLink>
                )}
              </S.TrackAuthor>

              <S.TrackAlbum>
                {isLoading ? (
                  <SkeletonTrack />
                ) : (
                  <S.TrackAlbumLink href="http://">
                    Soundz Made in Romania
                  </S.TrackAlbumLink>
                )}
              </S.TrackAlbum>
              <div className="track__time">
                <S.TrackTimeSvg alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                </S.TrackTimeSvg>
                <S.TrackTimeText>3:36</S.TrackTimeText>
              </div>
            </S.PlaylistTrack>
          </S.PlaylistItem>

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
                      How Deep Is Your Love{" "}
                      <S.TrackTitleSpan></S.TrackTitleSpan>
                    </S.TrackTitleLink>
                  )}
                </div>
              </S.TrackTitle>

              <S.TrackAuthor>
                {isLoading ? (
                  <SkeletonTrack />
                ) : (
                  <S.TrackAuthorLink href="http://">
                    Calvin Harris, Disciples
                  </S.TrackAuthorLink>
                )}
              </S.TrackAuthor>

              <S.TrackAlbum>
                {isLoading ? (
                  <SkeletonTrack />
                ) : (
                  <S.TrackAlbumLink href="http://">
                    How Deep Is Your Love
                  </S.TrackAlbumLink>
                )}
              </S.TrackAlbum>
              <div className="track__time">
                <S.TrackTimeSvg alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                </S.TrackTimeSvg>
                <S.TrackTimeText>3:32</S.TrackTimeText>
              </div>
            </S.PlaylistTrack>
          </S.PlaylistItem>
        </S.ContentPlaylist>
      </S.CenterblockContent>
    </S.MainCenterblock>
  );
}

export default PlayList;
