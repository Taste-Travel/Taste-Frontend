import styled from "@emotion/styled";

export const SideButtonComponent = () => {
  const BtnClick = () => {
    console.log("click!");
  };
  return (
    <>
      <Button onClick={BtnClick}>{">"}</Button>
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
