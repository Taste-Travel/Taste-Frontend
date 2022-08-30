import styled from "@emotion/styled";
import { useEffect, useState } from "react";

interface MarkProps {
  Mark: boolean;
}

export const SideButtonComponent = ({ Mark }: { Mark: boolean }) => {
  const [arrow, setArrow] = useState<string>(">");

  useEffect(() => {
    if (Mark === true) {
      setArrow("<");
    } else {
      setArrow(">");
    }
  });

  console.log("Mark : ", Mark);
  return (
    <>
      <Button>{arrow}</Button>
    </>
  );
};

export const Button = styled.button`
  width: 25px;
  height: 50px;
  position: absolute;
  margin-top: 47vh;
  z-index: 99;
`;
