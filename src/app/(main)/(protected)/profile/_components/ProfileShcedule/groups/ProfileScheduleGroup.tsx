import Cross from "@/app/components/ui/icons/Cross";
import * as SC from "./GroupsStyle.style";
import { useAppDispatch } from "@/app/lib/storeHooks";
import { setGroup } from "@/app/lib/store/profileSlice/profileSlice";
import { FC } from "react";

interface IProfileScheduleGroup {
  group: string;
}

export const ProfileScheduleGroup: FC<IProfileScheduleGroup> = (props) => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(setGroup(props.group));
  };

  return (
    <SC.GroupContainer onClick={handleClick}>
      <SC.Text>{props.group}</SC.Text>
      {/*<SC.SvgContainer>{props.type && <Cross />}</SC.SvgContainer>*/}
    </SC.GroupContainer>
  );
};
export default ProfileScheduleGroup;
