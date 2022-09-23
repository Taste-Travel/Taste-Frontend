import React from "react";
import * as S from "./style";
const Menu = () => {
  const Menu = [
    ["떡볶이", "3000"],
    ["김밥", "2500"],
    ["닭꼬치", "1500"],
    ["돈까스", "3500"],
    ["김치볶음밥", "4000"],
    ["음료수", "1000"],
  ];
  const Menulist = Menu.map((v) => (
    <S.Menu>
      <S.MenuName>{v[0]}</S.MenuName>
      <S.Price>{v[1]}</S.Price>
    </S.Menu>
  ));

  return <S.Board>{Menulist}</S.Board>;
};

export default Menu;
