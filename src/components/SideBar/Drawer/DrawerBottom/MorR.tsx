import React from "react";
import { useChoiceStore } from "../../../../Store/Store";
import Menu from "./SideMenu/Menu";
import Review from "./SideReview/Review";
const MorR = () => {
  const { choice } = useChoiceStore();
  if (choice === true) {
    return <Menu />;
  } else return <Review />;
};

export default MorR;
