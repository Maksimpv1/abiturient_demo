import Link from "next/link";
import * as SC from "../ScheduleStyle.style";
import useScreenSizeCheck from "@/app/components/hooks/UseScreenSizeCheck";

const TeachersAndGroups = ({ group }: { group?: string }) => {
  const screenSize = useScreenSizeCheck();

  return (
    <>
      {group ? (
        <SC.ScheduleItemBox>
          {screenSize === "mobile" ? `Гр:${group}` : `Группа:${group}`}
        </SC.ScheduleItemBox>
      ) : (
        <SC.ScheduleItemBox>
          <Link href={"profile/1"}>
            <SC.Icon />
          </Link>
        </SC.ScheduleItemBox>
      )}
    </>
  );
};

export default TeachersAndGroups;
