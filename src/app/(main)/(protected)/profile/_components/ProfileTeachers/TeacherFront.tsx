"use client";

import { FC } from "react";
import * as SC from "./ProfileTeachers.style";
import { ITeacherData } from "../../../../../components/moc/TeacherData";
import Title from "@/app/components/ui/Title/Title";
import useScreenSizeCheck from "@/app/components/hooks/UseScreenSizeCheck";

const TeacherFront: FC<ITeacherData> = (props) => {
  const screenSize = useScreenSizeCheck();
  return (
    <SC.TeacherContainer>
      <SC.TeacherLeft>
        <SC.LeftIcon />
      </SC.TeacherLeft>
      <SC.TeacherRight>
        <Title fontSize={screenSize === "mobile" ? "16" : "20"}>
          {`${props.secondName} ${props.firstName} ${props.lastName}`}
        </Title>
        <Title fontSize={screenSize === "mobile" ? "14" : "16"}>
          Ведёт:{" "}
          {props.item.map((item, index) => (
            <span key={index}>{`${item} `}</span>
          ))}
        </Title>
      </SC.TeacherRight>
    </SC.TeacherContainer>
  );
};

export default TeacherFront;
