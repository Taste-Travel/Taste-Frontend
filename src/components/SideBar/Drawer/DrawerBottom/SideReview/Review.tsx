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
  {
    id: 4,
    name: "민민모띠모띠",
    contents: "아 여기 위생이 별로더라구요..",
  },
  // {
  //   id: 5,
  //   name: "모띠모모모띠",
  //   contents: "아 여기 위생이 별로더라구요..",
  // },
  // {
  //   id: 6,
  //   name: "모띠모모모띠",
  //   contents: "아 여기 위생이 별로더라구요..",
  // },
  // {
  //   id: 7,
  //   name: "모띠모모모띠",
  //   contents: "아 여기 위생이 별로더라구요..",
  // },
  // {
  //   id: 8,
  //   name: "모띠모모모띠",
  //   contents: "아 여기 위생이 별로더라구요..",
  // },
];

const Review = () => {
  return (
    <>
      <S.Reviews>
        {InfoList.map((info) => (
          <S.Info backcolor={info.id}>
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
    </>
  );
};

export default Review;
