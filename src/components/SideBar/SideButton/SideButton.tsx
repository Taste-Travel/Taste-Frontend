import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useSideStore } from "../../../Store/Store";

export const SideButtonComponent = () => {
  const [arrow, setArrow] = useState<string>(">");
  const { sidebarOn } = useSideStore();

  useEffect(() => {
    sidebarOn ? setArrow("<") : setArrow(">");
  });

  return (
    <>
      <Button>{arrow}</Button>
    </>
  );
};

export const Button = styled.button`
  width: 30px;
  height: 60px;
  background: #ffffff;
  border: none;
  position: absolute;
  margin-top: 47vh;
  z-index: 99;
`;
