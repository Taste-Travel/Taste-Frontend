import { useState } from "react";
import { Drawer } from "./Drawer";
import { SideButton } from "./SideButton";
import * as S from "./style";
const SideBar = () => {
  const [sidebarOn, setSidebarOn] = useState<boolean>(false);
  const [mark, setMark] = useState<boolean>(false);
  const BtnClick = () => {
    setSidebarOn(!sidebarOn);
    setMark(!mark);
  };

  if (sidebarOn === true) {
    console.log("true : ", mark);
    return (
      <S.SideBar>
        <Drawer />
        <div onClick={BtnClick}>
          <SideButton Mark={mark} />
        </div>
      </S.SideBar>
    );
  } else {
    console.log("false : ", mark);
    return (
      <S.SideBar>
        <div onClick={BtnClick}>
          <SideButton Mark={mark} />
        </div>
      </S.SideBar>
    );
  }
};

export default SideBar;
