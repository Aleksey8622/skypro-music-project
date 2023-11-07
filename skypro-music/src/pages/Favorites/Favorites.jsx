import Navigation from "../../componets/Navigation/Navigation";
import Player from "../../componets/Player/Player";
import * as S from "../Main/MainStyle";

export function Favorites() {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Main>
          <Navigation />
          <div>
          <h2>Favorites</h2>
          </div>
        </S.Main>
        <Player />
      </S.Container>
    </S.Wrapper>
  );
}
