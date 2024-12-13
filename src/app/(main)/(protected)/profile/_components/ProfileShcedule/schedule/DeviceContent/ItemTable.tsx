import { FC } from "react";
import { IItemDesctop } from "../ScheduleItems";
import * as SC from "../ScheduleStyle.style";
import Link from "next/link";
import SmallScreenTime from "./SmallScreenTime";
import TeachersAndGroups from "./TeachersAndGroups";

const ItemTable: FC<IItemDesctop> = ({ item, type }) => {
  return (
    <SC.TableContainer>
      <SmallScreenTime
        timeEnd={item.timeEnd}
        timeStart={item.timeStart}
        color={type.color}
      />
      <SC.TableBox>
        <SC.ScheduleText>{item.name}</SC.ScheduleText>
        <SC.ScheduleText>{type.name}</SC.ScheduleText>
      </SC.TableBox>
      <SC.ScheduleItemBox>
        <SC.TableBox>
          <SC.ScheduleText>{item.room}</SC.ScheduleText>
        </SC.TableBox>
      </SC.ScheduleItemBox>
      <TeachersAndGroups group={item.group} />
    </SC.TableContainer>
  );
};
export default ItemTable;
