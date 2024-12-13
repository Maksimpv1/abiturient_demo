import Search from "@/app/components/ui/Search/Search";
import React, { useEffect, useState } from "react";
import * as SC from "./ProfileSchedule.style";
import { useAppDispatch, useAppSelector } from "@/app/lib/storeHooks";
import { setSearchGroup } from "@/app/lib/store/profileSlice/profileSlice";

const ScheduleSearch = () => {
  const [value, setValue] = useState<string>("");
  const dispatch = useAppDispatch();
  const groups = useAppSelector((item) => item.profile.groups);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    dispatch(setSearchGroup(value));
  }, [value, groups]);

  return (
    <SC.SearchContainer>
      <Search onChange={handleChange} value={value} />
    </SC.SearchContainer>
  );
};

export default ScheduleSearch;
