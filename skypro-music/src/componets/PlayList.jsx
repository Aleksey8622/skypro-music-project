import "../App.css";
import BlockFilter from "./BlockFilter";
import BlockSearch from "./BlockSearch";
import React from "react";
import { useState, useEffect } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
function PlayList() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  return (
    <div className="main__centerblock centerblock">
      <BlockSearch />
      <h2 className="centerblock__h2">Треки</h2>
      <BlockFilter />
      <div className="centerblock__content">
        <div className="content__title playlist-title">
          <div className="playlist-title__col col01">Трек</div>
          <div className="playlist-title__col col02">ИСПОЛНИТЕЛЬ</div>
          <div className="playlist-title__col col03">АЛЬБОМ</div>
          <div className="playlist-title__col col04">
            <svg className="playlist-title__svg" alt="time">
              <use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
            </svg>
          </div>
        </div>
        <div className="content__playlist playlist">
          <div className="playlist__item">
            <div className="playlist__track track">
              <div className="track__title">
                <div className="track__title-image">
                  <svg className="track__title-svg" alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                  </svg>
                </div>
                {isLoading ? (
                  <SkeletonTheme highlightColor="#696969" baseColor="#272727">
                    <Skeleton width={200} height={20} />
                  </SkeletonTheme>
                ) : (
                  <div className="track__title-text">
                    <a className="track__title-link" href="http://">
                      Guilt <span className="track__title-span"></span>
                    </a>
                  </div>
                )}
              </div>
              {isLoading ? (
                <SkeletonTheme highlightColor="#696969" baseColor="#272727">
                  <Skeleton width={330} height={20} />
                </SkeletonTheme>
              ) : (
                <div className="track__author">
                  <a className="track__author-link" href="http://">
                    Nero
                  </a>
                </div>
              )}
              {isLoading ? (
                <SkeletonTheme highlightColor="#696969" baseColor="#272727">
                  <Skeleton width={330} height={20} />
                </SkeletonTheme>
              ) : (
                <div className="track__album">
                  <a className="track__album-link" href="http://">
                    Welcome Reality
                  </a>
                </div>
              )}
              <div className="track__time">
                <svg className="track__time-svg" alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                </svg>
                <span className="track__time-text">4:44</span>
              </div>
            </div>
          </div>
          <div className="playlist__item">
            <div className="playlist__track track">
              <div className="track__title">
                <div className="track__title-image">
                  <svg className="track__title-svg" alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                  </svg>
                </div>
                {isLoading ? (
                  <SkeletonTheme highlightColor="#696969" baseColor="#272727">
                    <Skeleton width={200} height={20} />
                  </SkeletonTheme>
                ) : (
                  <div className="track__title-text">
                    <a className="track__title-link" href="http://">
                      I’m Fire <span className="track__title-span"></span>
                    </a>
                  </div>
                )}
              </div>
              {isLoading ? (
                <SkeletonTheme highlightColor="#696969" baseColor="#272727">
                  <Skeleton width={330} height={20} />
                </SkeletonTheme>
              ) : (
                <div className="track__author">
                  <a className="track__author-link" href="http://">
                    Ali Bakgor
                  </a>
                </div>
              )}
              {isLoading ? (
                <SkeletonTheme highlightColor="#696969" baseColor="#272727">
                  <Skeleton width={330} height={20} />
                </SkeletonTheme>
              ) : (
                <div className="track__album">
                  <a className="track__album-link" href="http://">
                    I’m Fire
                  </a>
                </div>
              )}
              <div className="track__time">
                <svg className="track__time-svg" alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                </svg>
                <span className="track__time-text">2:22</span>
              </div>
            </div>
          </div>

          <div className="playlist__item">
            <div className="playlist__track track">
              <div className="track__title">
                <div className="track__title-image">
                  <svg className="track__title-svg" alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                  </svg>
                </div>
                {isLoading ? (
                  <SkeletonTheme highlightColor="#696969" baseColor="#272727">
                    <Skeleton width={200} height={20} />
                  </SkeletonTheme>
                ) : (
                  <div className="track__title-text">
                    <a className="track__title-link" href="http://">
                      Non Stop
                      <span className="track__title-span">(Remix)</span>
                    </a>
                  </div>
                )}
              </div>
              {isLoading ? (
                <SkeletonTheme highlightColor="#696969" baseColor="#272727">
                  <Skeleton width={330} height={20} />
                </SkeletonTheme>
              ) : (
                <div className="track__author">
                  <a className="track__author-link" href="http://">
                    Стоункат, Psychopath
                  </a>
                </div>
              )}
              {isLoading ? (
                <SkeletonTheme highlightColor="#696969" baseColor="#272727">
                  <Skeleton width={330} height={20} />
                </SkeletonTheme>
              ) : (
                <div className="track__album">
                  <a className="track__album-link" href="http://">
                    Non Stop
                  </a>
                </div>
              )}
              <div className="track__time">
                <svg className="track__time-svg" alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                </svg>
                <span className="track__time-text">4:12</span>
              </div>
            </div>
          </div>

          <div className="playlist__item">
            <div className="playlist__track track">
              <div className="track__title">
                <div className="track__title-image">
                  <svg className="track__title-svg" alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                  </svg>
                </div>
                {isLoading ? (
                  <SkeletonTheme highlightColor="#696969" baseColor="#272727">
                    <Skeleton width={200} height={20} />
                  </SkeletonTheme>
                ) : (
                  <div className="track__title-text">
                    <a className="track__title-link" href="http://">
                      Run Run
                      <span className="track__title-span">(feat. AR/CO)</span>
                    </a>
                  </div>
                )}
              </div>
              {isLoading ? (
                <SkeletonTheme highlightColor="#696969" baseColor="#272727">
                  <Skeleton width={330} height={20} />
                </SkeletonTheme>
              ) : (
                <div className="track__author">
                  <a className="track__author-link" href="http://">
                    Jaded, Will Clarke, AR/CO
                  </a>
                </div>
              )}
              {isLoading ? (
                <SkeletonTheme highlightColor="#696969" baseColor="#272727">
                  <Skeleton width={330} height={20} />
                </SkeletonTheme>
              ) : (
                <div className="track__album">
                  <a className="track__album-link" href="http://">
                    Run Run
                  </a>
                </div>
              )}
              <div className="track__time">
                <svg className="track__time-svg" alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                </svg>
                <span className="track__time-text">2:54</span>
              </div>
            </div>
          </div>

          <div className="playlist__item">
            <div className="playlist__track track">
              <div className="track__title">
                <div className="track__title-image">
                  <svg className="track__title-svg" alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                  </svg>
                </div>
                {isLoading ? (
                  <SkeletonTheme highlightColor="#696969" baseColor="#272727">
                    <Skeleton width={200} height={20} />
                  </SkeletonTheme>
                ) : (
                  <div className="track__title-text">
                    <a className="track__title-link" href="http://">
                      Mucho Bien
                      <span className="track__title-span">
                        (Hi Profile Remix)
                      </span>
                    </a>
                  </div>
                )}
              </div>
              {isLoading ? (
                <SkeletonTheme highlightColor="#696969" baseColor="#272727">
                  <Skeleton width={330} height={20} />
                </SkeletonTheme>
              ) : (
                <div className="track__author">
                  <a className="track__author-link" href="http://">
                    HYBIT, Mr. Black, Offer Nissim, Hi Profile
                  </a>
                </div>
              )}
              {isLoading ? (
                <SkeletonTheme highlightColor="#696969" baseColor="#272727">
                  <Skeleton width={330} height={20} />
                </SkeletonTheme>
              ) : (
                <div className="track__album">
                  <a className="track__album-link" href="http://">
                    Mucho Bien
                  </a>
                </div>
              )}
              <div className="track__time">
                <svg className="track__time-svg" alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                </svg>
                <span className="track__time-text">3:41</span>
              </div>
            </div>
          </div>

          <div className="playlist__item">
            <div className="playlist__track track">
              <div className="track__title">
                <div className="track__title-image">
                  <svg className="track__title-svg" alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                  </svg>
                </div>
                {isLoading ? (
                  <SkeletonTheme highlightColor="#696969" baseColor="#272727">
                    <Skeleton width={200} height={20} />
                  </SkeletonTheme>
                ) : (
                  <div className="track__title-text">
                    <a className="track__title-link" href="http://">
                      Knives n Cherries
                      <span className="track__title-span"></span>
                    </a>
                  </div>
                )}
              </div>
              {isLoading ? (
                <SkeletonTheme highlightColor="#696969" baseColor="#272727">
                  <Skeleton width={330} height={20} />
                </SkeletonTheme>
              ) : (
                <div className="track__author">
                  <a className="track__author-link" href="http://">
                    minthaze
                  </a>
                </div>
              )}
              {isLoading ? (
                <SkeletonTheme highlightColor="#696969" baseColor="#272727">
                  <Skeleton width={330} height={20} />
                </SkeletonTheme>
              ) : (
                <div className="track__album">
                  <a className="track__album-link" href="http://">
                    Captivating
                  </a>
                </div>
              )}
              <div className="track__time">
                <svg className="track__time-svg" alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                </svg>
                <span className="track__time-text">1:48</span>
              </div>
            </div>
          </div>

          <div className="playlist__item">
            <div className="playlist__track track">
              <div className="track__title">
                <div className="track__title-image">
                  <svg className="track__title-svg" alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                  </svg>
                </div>
                {isLoading ? (
                  <SkeletonTheme highlightColor="#696969" baseColor="#272727">
                    <Skeleton width={200} height={20} />
                  </SkeletonTheme>
                ) : (
                  <div className="track__title-text">
                    <a className="track__title-link" href="http://">
                      Knives n Cherries
                      <span className="track__title-span"></span>
                    </a>
                  </div>
                )}
              </div>
              {isLoading ? (
                <SkeletonTheme highlightColor="#696969" baseColor="#272727">
                  <Skeleton width={330} height={20} />
                </SkeletonTheme>
              ) : (
                <div className="track__author">
                  <a className="track__author-link" href="http://">
                    minthaze
                  </a>
                </div>
              )}
              {isLoading ? (
                <SkeletonTheme highlightColor="#696969" baseColor="#272727">
                  <Skeleton width={330} height={20} />
                </SkeletonTheme>
              ) : (
                <div className="track__album">
                  <a className="track__album-link" href="http://">
                    Captivating
                  </a>
                </div>
              )}
              <div className="track__time">
                <svg className="track__time-svg" alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                </svg>
                <span className="track__time-text">1:48</span>
              </div>
            </div>
          </div>

          <div className="playlist__item">
            <div className="playlist__track track">
              <div className="track__title">
                <div className="track__title-image">
                  <svg className="track__title-svg" alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                  </svg>
                </div>
                {isLoading ? (
                  <SkeletonTheme highlightColor="#696969" baseColor="#272727">
                    <Skeleton width={200} height={20} />
                  </SkeletonTheme>
                ) : (
                  <div className="track__title-text">
                    <a className="track__title-link" href="http://">
                      Knives n Cherries
                      <span className="track__title-span"></span>
                    </a>
                  </div>
                )}
              </div>
              {isLoading ? (
                <SkeletonTheme highlightColor="#696969" baseColor="#272727">
                  <Skeleton width={330} height={20} />
                </SkeletonTheme>
              ) : (
                <div className="track__author">
                  <a className="track__author-link" href="http://">
                    minthaze
                  </a>
                </div>
              )}
              {isLoading ? (
                <SkeletonTheme highlightColor="#696969" baseColor="#272727">
                  <Skeleton width={330} height={20} />
                </SkeletonTheme>
              ) : (
                <div className="track__album">
                  <a className="track__album-link" href="http://">
                    Captivating
                  </a>
                </div>
              )}
              <div className="track__time">
                <svg className="track__time-svg" alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                </svg>
                <span className="track__time-text">1:48</span>
              </div>
            </div>
          </div>

          <div className="playlist__item">
            <div className="playlist__track track">
              <div className="track__title">
                <div className="track__title-image">
                  <svg className="track__title-svg" alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                  </svg>
                </div>
                {isLoading ? (
                  <SkeletonTheme highlightColor="#696969" baseColor="#272727">
                    <Skeleton width={200} height={20} />
                  </SkeletonTheme>
                ) : (
                  <div className="track__title-text">
                    <a className="track__title-link" href="http://">
                      Knives n Cherries
                      <span className="track__title-span"></span>
                    </a>
                  </div>
                )}
              </div>
              {isLoading ? (
                <SkeletonTheme highlightColor="#696969" baseColor="#272727">
                  <Skeleton width={330} height={20} />
                </SkeletonTheme>
              ) : (
                <div className="track__author">
                  <a className="track__author-link" href="http://">
                    minthaze
                  </a>
                </div>
              )}
              {isLoading ? (
                <SkeletonTheme highlightColor="#696969" baseColor="#272727">
                  <Skeleton width={330} height={20} />
                </SkeletonTheme>
              ) : (
                <div className="track__album">
                  <a className="track__album-link" href="http://">
                    Captivating
                  </a>
                </div>
              )}
              <div className="track__time">
                <svg className="track__time-svg" alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                </svg>
                <span className="track__time-text">1:48</span>
              </div>
            </div>
          </div>

          <div className="playlist__item">
            <div className="playlist__track track">
              <div className="track__title">
                <div className="track__title-image">
                  <svg className="track__title-svg" alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                  </svg>
                </div>
                {isLoading ? (
                  <SkeletonTheme highlightColor="#696969" baseColor="#272727">
                    <Skeleton width={200} height={20} />
                  </SkeletonTheme>
                ) : (
                  <div className="track__title-text">
                    <a className="track__title-link" href="http://">
                      Knives n Cherries
                      <span className="track__title-span"></span>
                    </a>
                  </div>
                )}
              </div>
              {isLoading ? (
                <SkeletonTheme highlightColor="#696969" baseColor="#272727">
                  <Skeleton width={330} height={20} />
                </SkeletonTheme>
              ) : (
                <div className="track__author">
                  <a className="track__author-link" href="http://">
                    minthaze
                  </a>
                </div>
              )}
              {isLoading ? (
                <SkeletonTheme highlightColor="#696969" baseColor="#272727">
                  <Skeleton width={330} height={20} />
                </SkeletonTheme>
              ) : (
                <div className="track__album">
                  <a className="track__album-link" href="http://">
                    Captivating
                  </a>
                </div>
              )}
              <div className="track__time">
                <svg className="track__time-svg" alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                </svg>
                <span className="track__time-text">1:48</span>
              </div>
            </div>
          </div>

          <div className="playlist__item">
            <div className="playlist__track track">
              <div className="track__title">
                <div className="track__title-image">
                  <svg className="track__title-svg" alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                  </svg>
                </div>
                {isLoading ? (
                  <SkeletonTheme highlightColor="#696969" baseColor="#272727">
                    <Skeleton width={200} height={20} />
                  </SkeletonTheme>
                ) : (
                  <div className="track__title-text">
                    <a className="track__title-link" href="http://">
                      Knives n Cherries
                      <span className="track__title-span"></span>
                    </a>
                  </div>
                )}
              </div>
              {isLoading ? (
                <SkeletonTheme highlightColor="#696969" baseColor="#272727">
                  <Skeleton width={330} height={20} />
                </SkeletonTheme>
              ) : (
                <div className="track__author">
                  <a className="track__author-link" href="http://">
                    minthaze
                  </a>
                </div>
              )}
              {isLoading ? (
                <SkeletonTheme highlightColor="#696969" baseColor="#272727">
                  <Skeleton width={330} height={20} />
                </SkeletonTheme>
              ) : (
                <div className="track__album">
                  <a className="track__album-link" href="http://">
                    Captivating
                  </a>
                </div>
              )}
              <div className="track__time">
                <svg className="track__time-svg" alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                </svg>
                <span className="track__time-text">1:48</span>
              </div>
            </div>
          </div>

          <div className="playlist__item">
            <div className="playlist__track track">
              <div className="track__title">
                <div className="track__title-image">
                  <svg className="track__title-svg" alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                  </svg>
                </div>
                {isLoading ? (
                  <SkeletonTheme highlightColor="#696969" baseColor="#272727">
                    <Skeleton width={200} height={20} />
                  </SkeletonTheme>
                ) : (
                  <div className="track__title-text">
                    <a className="track__title-link" href="http://">
                      Knives n Cherries
                      <span className="track__title-span"></span>
                    </a>
                  </div>
                )}
              </div>
              {isLoading ? (
                <SkeletonTheme highlightColor="#696969" baseColor="#272727">
                  <Skeleton width={330} height={20} />
                </SkeletonTheme>
              ) : (
                <div className="track__author">
                  <a className="track__author-link" href="http://">
                    minthaze
                  </a>
                </div>
              )}
              {isLoading ? (
                <SkeletonTheme highlightColor="#696969" baseColor="#272727">
                  <Skeleton width={330} height={20} />
                </SkeletonTheme>
              ) : (
                <div className="track__album">
                  <a className="track__album-link" href="http://">
                    Captivating
                  </a>
                </div>
              )}
              <div className="track__time">
                <svg className="track__time-svg" alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                </svg>
                <span className="track__time-text">1:48</span>
              </div>
            </div>
          </div>

          <div className="playlist__item">
            <div className="playlist__track track">
              <div className="track__title">
                <div className="track__title-image">
                  <svg className="track__title-svg" alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                  </svg>
                </div>
                {isLoading ? (
                  <SkeletonTheme highlightColor="#696969" baseColor="#272727">
                    <Skeleton width={200} height={20} />
                  </SkeletonTheme>
                ) : (
                  <div className="track__title-text">
                    <a className="track__title-link" href="http://">
                      How Deep Is Your Love
                      <span className="track__title-span"></span>
                    </a>
                  </div>
                )}
              </div>
              {isLoading ? (
                <SkeletonTheme highlightColor="#696969" baseColor="#272727">
                  <Skeleton width={330} height={20} />
                </SkeletonTheme>
              ) : (
                <div className="track__author">
                  <a className="track__author-link" href="http://">
                    Calvin Harris, Disciples
                  </a>
                </div>
              )}
              {isLoading ? (
                <SkeletonTheme highlightColor="#696969" baseColor="#272727">
                  <Skeleton width={330} height={20} />
                </SkeletonTheme>
              ) : (
                <div className="track__album">
                  <a className="track__album-link" href="http://">
                    How Deep Is Your Love
                  </a>
                </div>
              )}
              <div className="track__time">
                <svg className="track__time-svg" alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                </svg>
                <span className="track__time-text">3:32</span>
              </div>
            </div>
          </div>

          <div className="playlist__item">
            <div className="playlist__track track">
              <div className="track__title">
                <div className="track__title-image">
                  <svg className="track__title-svg" alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                  </svg>
                </div>
                {isLoading ? (
                  <SkeletonTheme highlightColor="#696969" baseColor="#272727">
                    <Skeleton width={200} height={20} />
                  </SkeletonTheme>
                ) : (
                  <div className="track__title-text">
                    <a className="track__title-link" href="http://">
                      Morena <span className="track__title-span"></span>
                    </a>
                  </div>
                )}
              </div>
              {isLoading ? (
                <SkeletonTheme highlightColor="#696969" baseColor="#272727">
                  <Skeleton width={330} height={20} />
                </SkeletonTheme>
              ) : (
                <div className="track__author">
                  <a className="track__author-link" href="http://">
                    Tom Boxer
                  </a>
                </div>
              )}
              {isLoading ? (
                <SkeletonTheme highlightColor="#696969" baseColor="#272727">
                  <Skeleton width={330} height={20} />
                </SkeletonTheme>
              ) : (
                <div className="track__album">
                  <a className="track__album-link" href="http://">
                    Soundz Made in Romania
                  </a>
                </div>
              )}
              <div className="track__time">
                <svg className="track__time-svg" alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                </svg>
                <span className="track__time-text">3:36</span>
              </div>
            </div>
          </div>

          <div className="playlist__item">
            <div className="playlist__track track">
              <div className="track__title">
                <div className="track__title-image">
                  <svg className="track__title-svg" alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                  </svg>
                </div>
                {isLoading ? (
                  <SkeletonTheme highlightColor="#696969" baseColor="#272727">
                    <Skeleton width={200} height={20} />
                  </SkeletonTheme>
                ) : (
                  <div className="track__title-text">
                    <a className="track__title-link" href="http://">
                      Morena <span className="track__title-span"></span>
                    </a>
                  </div>
                )}
              </div>
              {isLoading ? (
                <SkeletonTheme highlightColor="#696969" baseColor="#272727">
                  <Skeleton width={330} height={20} />
                </SkeletonTheme>
              ) : (
                <div className="track__author">
                  <a className="track__author-link" href="http://">
                    Tom Boxer
                  </a>
                </div>
              )}
              {isLoading ? (
                <SkeletonTheme highlightColor="#696969" baseColor="#272727">
                  <Skeleton width={330} height={20} />
                </SkeletonTheme>
              ) : (
                <div className="track__album">
                  <a className="track__album-link" href="http://">
                    Soundz Made in Romania
                  </a>
                </div>
              )}
              <div className="track__time">
                <svg className="track__time-svg" alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                </svg>
                <span className="track__time-text">3:36</span>
              </div>
            </div>
          </div>

          <div className="playlist__item">
            <div className="playlist__track track">
              <div className="track__title">
                <div className="track__title-image">
                  <svg className="track__title-svg" alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                  </svg>
                </div>
                {isLoading ? (
                  <SkeletonTheme highlightColor="#696969" baseColor="#272727">
                    <Skeleton width={200} height={20} />
                  </SkeletonTheme>
                ) : (
                  <div className="track__title-text">
                    <a className="track__title-link" href="http://">
                      <span className="track__title-span"></span>
                    </a>
                  </div>
                )}
              </div>
              {isLoading ? (
                <SkeletonTheme highlightColor="#696969" baseColor="#272727">
                  <Skeleton width={330} height={20} />
                </SkeletonTheme>
              ) : (
                <div className="track__author">
                  <a className="track__author-link" href="http://">
                    {" "}
                  </a>
                </div>
              )}
              {isLoading ? (
                <SkeletonTheme highlightColor="#696969" baseColor="#272727">
                  <Skeleton width={330} height={20} />
                </SkeletonTheme>
              ) : (
                <div className="track__album">
                  <a className="track__album-link" href="http://">
                    {" "}
                  </a>
                </div>
              )}
              <div className="track__time">
                <svg className="track__time-svg" alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                </svg>
                <span className="track__time-text"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlayList;
