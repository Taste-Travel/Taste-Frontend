import { Header } from "../Header";
import { Maps } from "../Map";
import styled from "@emotion/styled";
import { SideButton } from "../SideBar/SideButton";

export const MainPageCompoent = () => {
  return (
    <>
      <Main>
        <SideButton />
        <Header />
        <Maps />
      </Main>
    </>
  );
};

const Main = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;
