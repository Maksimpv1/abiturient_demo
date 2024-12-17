"use client";

import React, { useEffect, useState } from "react";
import * as SC from "./MainFooter.style";
import { icons } from "./IconsData";

const MainFooter = () => { 
   const [isLoading, setIsLoading] = useState<boolean>(false)
  useEffect(()=>{
    setIsLoading(true)
  },[])
  if(!isLoading){
    return(<div>loading ....</div>)
  }
  return (
    <SC.Container>
      {icons.map((item, index) => (
        <SC.ImgBox key={index}>{item.name}</SC.ImgBox>
      ))}
    </SC.Container>
  );
};

export default MainFooter;
