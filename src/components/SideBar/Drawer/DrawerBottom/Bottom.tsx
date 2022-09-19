import * as S from "./style";
import { useChoiceStore } from "../../../../Store/Store";
import { useEffect } from "react";
import MorR from "./MorR";

export const BottomComponent = () => {
  const { choice, choiceMenu, choiceReview } = useChoiceStore();

  useEffect(() => {
    console.log(choice);
  }, [choice]);

  return (
    <S.Bottom>
      <S.Choice>
        <S.Menu onClick={choiceMenu} choice={choice}>
          메뉴
        </S.Menu>
        <S.Review onClick={choiceReview} choice={choice}>
          리뷰
        </S.Review>
      </S.Choice>
      <MorR />
      <p className="copyright">© 2022. TasteTravel All rights reserved.</p>
    </S.Bottom>
  );
};
