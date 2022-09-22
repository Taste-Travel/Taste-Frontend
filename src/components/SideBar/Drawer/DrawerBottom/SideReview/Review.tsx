import React from "react";
import * as S from "./style";
import Image from "next/image";

const InfoList = [
  {
    id: 1,
    name: "민경모",
    contents: "정말 맛있네요.",
  },
  {
    id: 2,
    name: "민모띠",
    contents: "꽤 먹을만하네요.",
  },
  {
    id: 3,
    name: "모띠모띠",
    contents: "아 여기 위생이 별로더라구요..",
  },
];

const Review = () => {
  return (
    <S.Review>
      <S.Reviews>
        {InfoList.map((info) => (
          <S.Info>
            <p className="review">
              <S.Profile>
                <Image src={"/images/SideImage.png"} width={40} height={40} />
              </S.Profile>
              <p className="Info">
                <S.ProfileName>{info.name}</S.ProfileName>
                <S.Contents className="contents">{info.contents}</S.Contents>
              </p>
            </p>
          </S.Info>
        ))}
      </S.Reviews>
      <S.WriteReview>리뷰작성</S.WriteReview>
    </S.Review>
  );
};

export default Review;
