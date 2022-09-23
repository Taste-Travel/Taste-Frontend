import * as S from "./style";
import { Top } from "./DrawerTop.tsx";
import { Bottom } from "./DrawerBottom";

export const DrawerComponent = () => {
  return (
    <>
      <S.Drawers>
        <Top />
        <Bottom />
      </S.Drawers>
    </>
  );
};
