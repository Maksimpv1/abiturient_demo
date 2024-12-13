import { IDataWeek } from "../../../../../../components/moc/ScheduleData";
import ScheduleItems from "./ScheduleItems";
import * as SC from "./ScheduleStyle.style";

const ScheduleDay = ({ weekData }: { weekData: IDataWeek }) => {
  return (
    <>
      {weekData.days.map((item, index) => (
        <SC.DayContainer key={index}>
          <SC.DayText>{item.day}</SC.DayText>
          {item.items.map((item, itemIndex) => (
            <SC.ScheduleItemInfo key={itemIndex}>
              <ScheduleItems item={item} />
            </SC.ScheduleItemInfo>
          ))}
        </SC.DayContainer>
      ))}
    </>
  );
};

export default ScheduleDay;
