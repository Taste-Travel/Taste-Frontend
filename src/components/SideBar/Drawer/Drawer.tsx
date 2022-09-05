import Image from "next/image";
import * as S from "./style";

export const DrawerComponent = () => {
  return (
    <>
      <S.Drawers>
        <S.Top>
          <Image
            src={"/images/HeadLogo.png"}
            alt="HeaderLogo"
            width={144}
            height={76}
          />
          <S.Restaurant_Photo></S.Restaurant_Photo>
          <S.Restaurant_Name></S.Restaurant_Name>
          <S.Restaurant_Evaluation></S.Restaurant_Evaluation>
        </S.Top>
        <S.Bottom></S.Bottom>
      </S.Drawers>
    </>
  );
};
