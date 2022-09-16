import styled from "@emotion/styled";

export const Board = styled.table`
  border: 1px solid black;
  width: 320px;
  height: 550px;
  border-style: hidden;
  box-shadow: inset 1px 1px 4px #646262;
  border-radius: 10px;
  background: #fffbef;
`;

export const Menu = styled.tr``;

export const MenuName = styled.td`
  padding-left: 50px;
  text-align: left;
  vertical-align: middle;
  font-size: 1.5rem;
`;

export const Price = styled(MenuName)`
  padding-right: 50px;
`;
