import Title from "@/app/components/ui/Title/Title";
import * as SC from "../ScheduleStyle.style";
import { FC } from "react";
import { IItemDesctop } from "../ScheduleItems";
import Link from "next/link";
import RightArrow from "@/app/components/ui/icons/RightArrow";

const ModalContant: FC<IItemDesctop> = ({ item, type }) => {
  const dataContant = [
    { name: "Предмет", value: item.name },
    { name: "Время", value: `${item.timeStart} - ${item.timeEnd}` },
    { name: "Кабинет", value: item.room },
    { name: "Тип", value: type.name },
    { name: "Группа", value: item.group },
  ];
  return (
    <SC.ModalContainer>
      {!item.group && (
        <>
          <Title fontSize={"18"}>Преподаватель</Title>
          <SC.ModalDetailsContaner>
            <SC.ModalTeacher>
              <SC.Icon />
              <Title fontSize={"18"} margin={"0 15px"}>
                {item.teacherName}
              </Title>
              <Link href={"profile/1"}>
                <RightArrow />
              </Link>
            </SC.ModalTeacher>
          </SC.ModalDetailsContaner>
        </>
      )}
      <Title fontSize={"18"}>Детали</Title>
      <SC.ModalDetailsContaner>
        {dataContant.map((item, index) => (
          <Title key={index} fontSize={"16"} margin={"5px 0"}>
            {item.value && `${item.name}: ${item.value}`}
          </Title>
        ))}
      </SC.ModalDetailsContaner>
    </SC.ModalContainer>
  );
};

export default ModalContant;
