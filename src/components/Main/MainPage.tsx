import { Header } from "../Header";
import { Maps } from "../Map";
import styled from "@emotion/styled";
import SideBar from "../SideBar";

export const MainPageCompoent = (onClick: () => void) => {
  return (
    <>
      <Main>
        <SideBar />
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

const Side = styled.aside``;
