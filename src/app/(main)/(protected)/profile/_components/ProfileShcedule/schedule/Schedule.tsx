import { FC, useEffect, useState } from "react";
import {
  IDataWeek,
  scheduleData,
} from "../../../../../../components/moc/ScheduleData";
import ScheduleDay from "./ScheduleDay";
import * as SC from "./ScheduleStyle.style";
import Title from "@/app/components/ui/Title/Title";

interface ISchedule {
  group?: string;
  weeksData: IDataWeek[];
}

const Schedule: FC<ISchedule> = ({ group, weeksData }) => {
  return (
    <SC.ScheduleContainer>
      {weeksData.map((week, index) => (
        <SC.ScheduleContainerWeek key={index}>
          <Title textAlign={"center"} fontSize={"24"}>
            Неделя {week.number}
          </Title>
          <ScheduleDay weekData={week} />
        </SC.ScheduleContainerWeek>
      ))}
    </SC.ScheduleContainer>
  );
};

export default Schedule;
