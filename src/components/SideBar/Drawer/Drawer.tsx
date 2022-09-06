import * as S from "./style";
import { Top } from "./DrawerTop.tsx";

export const DrawerComponent = () => {
  return (
    <>
      <S.Drawers>
        <Top />
        <S.Bottom></S.Bottom>
      </S.Drawers>
    </>
  );
};
