import { Drawer } from "./Drawer";
import { SideButton } from "./SideButton";
import * as S from "./style";
import { useSideStore } from "../../Store/Store";

const SideBar = () => {
  const { sidebarOn, sideToggle } = useSideStore();
  // const sideToggle = useSideStore((state) => state.sidebarOn);

  if (sidebarOn === true) {
    return (
      <S.SideBar>
        <Drawer />
        <div
          onClick={() => {
            sideToggle();
          }}
        >
          <SideButton />
        </div>
      </S.SideBar>
    );
  } else {
    return (
      <S.SideBar>
        <div
          onClick={() => {
            sideToggle();
          }}
        >
          <SideButton />
        </div>
      </S.SideBar>
    );
  }
};

export default SideBar;
