"use client";

import React from "react";
import * as SC from "./MainFooter.style";
import { icons } from "./IconsData";

const MainFooter = () => {
  return (
    <SC.Container>
      {icons.map((item, index) => (
        <SC.ImgBox key={index}>{item.name}</SC.ImgBox>
      ))}
    </SC.Container>
  );
};

export default MainFooter;
