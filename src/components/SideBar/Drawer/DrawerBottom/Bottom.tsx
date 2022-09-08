import * as S from "./style";
import { useChoiceStore } from "../../../../Store/Store";
import { useEffect } from "react";
import Menu from "./SideMenu/Menu";

export const BottomComponent = () => {
  const { choice, choiceMenu, choiceReview } = useChoiceStore();

  useEffect(() => {
    console.log(choice);
  }, [choice]);

  return (
    <>
      <S.Choice>
        <S.Menu onClick={choiceMenu}>메뉴</S.Menu>
        <S.Review onClick={choiceReview}>리뷰</S.Review>
      </S.Choice>
    </>
  );
};
