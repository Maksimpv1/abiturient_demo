import { FC } from "react";
import * as SC from "../ScheduleStyle.style";

interface ISmallScreenTime {
  timeStart: string;
  timeEnd: string;
  color: string;
}

const SmallScreenTime: FC<ISmallScreenTime> = (props) => {
  return (
    <SC.ScheduleItemBox>
      <SC.TableBox>
        <SC.ScheduleText>{props.timeStart}</SC.ScheduleText>
        <SC.ScheduleText>{props.timeEnd}</SC.ScheduleText>
      </SC.TableBox>
      <SC.ItemTypeColor $bg={props.color} />
    </SC.ScheduleItemBox>
  );
};

export default SmallScreenTime;
