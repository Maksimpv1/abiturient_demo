"use client";

import Button from "@/app/components/ui/Button/Button";
import * as SC from "./ProfileMarks.style";
import { useState } from "react";
import { useAppDispatch } from "@/app/lib/storeHooks";
import { setCursesMarks } from "@/app/lib/store/profileSlice/profileSlice";
import { ProfileKeysType } from "./MarksData";
import GlobalAverage from "./GlobalAverage";
interface IBtnData {
  id: number;
  text: string;
  name: ProfileKeysType;
}

const btnData: IBtnData[] = [
  { id: 0, text: "1 курс", name: "cursesFir" },
  { id: 1, text: "2 курс", name: "cursesSec" },
  { id: 2, text: "3 курс", name: "cursesThr" },
  { id: 3, text: "4 курс", name: "cursesFou" },
];

const MarksBtns = () => {
  const [active, setActive] = useState<number>(0);
  const dispatch = useAppDispatch();

  const handleClick = (item: IBtnData) => {
    setActive(item.id);
    dispatch(setCursesMarks({ name: item.name }));
  };

  return (
    <SC.BtnContainer>
      <SC.BtnContent>
        {btnData.map((item) => (
          <SC.BtnWrapper key={item.id}>
            <Button
              borderRadius={"0"}
              text={item.text}
              onClick={() => handleClick(item)}
              $activeshow={item.id === active}
            />
          </SC.BtnWrapper>
        ))}
      </SC.BtnContent>
      <GlobalAverage />
    </SC.BtnContainer>
  );
};
export default MarksBtns;
