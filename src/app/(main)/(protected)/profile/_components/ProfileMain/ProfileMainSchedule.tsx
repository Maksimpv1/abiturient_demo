import Button from "@/app/components/ui/Button/Button";
import { useState } from "react";
import * as SC from "./ProfileMain.style";
import Schedule from "../ProfileShcedule/schedule/Schedule";
import { scheduleData } from "@/app/components/moc/ScheduleData";

const ProfileMainSchedule = () => {
  const [openSchedule, setOpenSchedule] = useState<boolean>(false);

  const handleClick = () => {
    setOpenSchedule(!openSchedule);
  };
  return (
    <SC.ScheduleContainer>
      <Button
        onClick={handleClick}
        text={`${openSchedule ? "Закрыть" : "Открыть"} расписание`}
      />
      {openSchedule && <Schedule weeksData={scheduleData[0].week} />}
    </SC.ScheduleContainer>
  );
};

export default ProfileMainSchedule;
