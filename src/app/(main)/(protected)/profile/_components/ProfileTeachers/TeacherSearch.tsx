import Search from "@/app/components/ui/Search/Search";
import * as SC from "./ProfileTeachers.style";
import { useEffect, useState } from "react";
import {
  ITeacherData,
  teacherData,
} from "../../../../../components/moc/TeacherData";
import { useAppDispatch } from "@/app/lib/storeHooks";
import { setSearchTeacherData } from "@/app/lib/store/profileSlice/profileSlice";

const TeacherSearch = () => {
  const [value, setValue] = useState<string>("");
  const dispatch = useAppDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  useEffect(() => {
    dispatch(setSearchTeacherData(value));
  }, [value, teacherData]);

  return (
    <SC.SeachContainer>
      <Search value={value} onChange={handleChange} />
    </SC.SeachContainer>
  );
};

export default TeacherSearch;
