import Image from "next/image";
import * as S from "./style";
export const TopComponent = () => {
  return (
    <S.Top>
      <S.Logo>
        <Image
          src={"/images/HeadLogo.png"}
          alt="HeaderLogo"
          width={144}
          height={76}
        />
      </S.Logo>
      <S.Restaurant_Photo>
        <Image
          src={"/images/DummyImage.png"}
          alt="Restaurant_Photo"
          width={370}
          height={170}
        />
      </S.Restaurant_Photo>
      <S.Restaurant_Name>묘미분식</S.Restaurant_Name>
      <S.Restaurant_Evaluation>
        <p>⭐️ (data)&nbsp;</p>
        <p>리뷰 (data)</p>
      </S.Restaurant_Evaluation>
    </S.Top>
  );
};
