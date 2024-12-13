import ScheduleSearch from "./ScheduleSearch";
import * as SC from "./ProfileSchedule.style";
import { Container } from "@/app/components/ui/StandartStyles/StandartStyles.style";
import ProfileScheduleGroups from "./groups/ProfileScheduleGroups";
import Schedule from "./schedule/Schedule";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/app/lib/storeHooks";
import Title from "@/app/components/ui/Title/Title";
import Button from "@/app/components/ui/Button/Button";
import { setGroup } from "@/app/lib/store/profileSlice/profileSlice";
import { IDataWeek, scheduleData } from "@/app/components/moc/ScheduleData";

const ProfileShcedule = () => {
  const [view, setView] = useState<boolean>(false);
  const [weekData, setWeekData] = useState<IDataWeek[]>([]);

  const group = useAppSelector((item) => item.profile.selectedGroup);
  const dispatch = useAppDispatch();

  useEffect(() => {
    group !== "" ? setView(true) : setView(false);
    scheduleData.map((item) => setWeekData(item.week));
  }, [group, scheduleData]);

  const handleClick = () => {
    dispatch(setGroup(""));
  };

  return (
    <Container>
      <SC.Container>
        {!view ? (
          <>
            <ScheduleSearch />
            <ProfileScheduleGroups />
          </>
        ) : (
          <SC.ViewContainer>
            <Button
              onClick={handleClick}
              text={"Вернуться к поиску"}
              margin={"20px 0"}
            />
            <Title fontSize={"24"}>Группа: {group}</Title>
            <Schedule weeksData={weekData} group={group} />
          </SC.ViewContainer>
        )}
      </SC.Container>
    </Container>
  );
};
export default ProfileShcedule;
