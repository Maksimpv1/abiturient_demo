"use client";

import {
  Container,
  Text,
} from "@/app/components/ui/StandartStyles/StandartStyles.style";
import { useParams } from "next/navigation";
import * as SC from "./ProfileTeachers.style";
import Title from "@/app/components/ui/Title/Title";
import { teacherData } from "../../../../../components/moc/TeacherData";
import Schedule from "../ProfileShcedule/schedule/Schedule";
import { useAppSelector } from "@/app/lib/storeHooks";

const TeacherOne = () => {
  const params = useParams();
  const id = Number(params.teacherPage);

  const teacher = teacherData[id];
  const { secondName, firstName, lastName, kafedra, item, email } = teacher;
  const schedule = useAppSelector((item) => item.profile.teacherSchedule);

  if (!teacher) {
    return (
      <Container>
        <Title>Преродаватель не найден</Title>
      </Container>
    );
  }
  return (
    <SC.TeachersContainer>
      <SC.OneContainer margin={"0 0 30px 0"}>
        <SC.LeftIcon />
      </SC.OneContainer>
      <SC.OneContainer margin={"20px"}>
        <Title
          fontSize={"24"}
        >{`${secondName} ${firstName} ${lastName}`}</Title>
      </SC.OneContainer>
      <SC.TeacherOneInfo>
        <Text>
          Кафедра:{" "}
          {kafedra.map((item, index) => (
            <span key={index}>{item + " "}</span>
          ))}
        </Text>
        <Text>
          Предменты:{" "}
          {item.map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </Text>
        <Text>Email: {email}</Text>
      </SC.TeacherOneInfo>
      <Schedule weeksData={schedule} />
    </SC.TeachersContainer>
  );
};

export default TeacherOne;
