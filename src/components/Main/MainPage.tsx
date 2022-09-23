import { Header } from "../Header";
import { Maps } from "../Map";
import SideBar from "../SideBar";
import * as S from "./style";

export const MainPageCompoent = () => {
  return (
    <>
      <S.Main>
        <S.Side>
          <SideBar />
        </S.Side>
        <S.Body>
          <Header />
          <Maps />
        </S.Body>
      </S.Main>
    </>
  );
};
