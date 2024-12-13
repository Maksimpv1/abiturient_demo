import {
  ICursesData,
  ProfileKeysType,
  rowData,
} from "@/app/(main)/(protected)/profile/_components/ProfileMarks/MarksData";
import { ITeacherData, teacherData } from "@/app/components/moc/TeacherData";
import filterTeachers from "@/app/components/hooks/FilterTeachers";
import { groups } from "@/app/components/moc/groups";
import { IDataWeek } from "@/app/components/moc/ScheduleData";
import { teacherSchedule } from "@/app/components/moc/teacherSchedule";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProfileState {
  name: string[];
  profilePage: number;
  profileCurses: ProfileKeysType;
  cursesData: ICursesData;
  profileTeachersSearchData: ITeacherData[];
  baseTeacherData: ITeacherData[];
  profileTeachersSearch: boolean;
  groups: string[];
  selectedGroup?: string;
  searchedGroups: string[];
  teacherSchedule: IDataWeek[];
}

const initialState: ProfileState = {
  name: [],
  profilePage: 0,
  profileCurses: "cursesFir",
  cursesData: rowData["cursesFir"],
  baseTeacherData: teacherData,
  profileTeachersSearchData: [],
  profileTeachersSearch: false,
  groups: groups,
  searchedGroups: [],
  selectedGroup: "",
  teacherSchedule: teacherSchedule,
};

const profileSlice = createSlice({
  name: "eventsProfile",
  initialState,
  reducers: {
    setProfilePage(state, action) {
      state.profilePage = action.payload.id;
    },
    setCursesMarks(state, action: PayloadAction<{ name: ProfileKeysType }>) {
      const curse = action.payload.name;
      state.profileCurses = curse;
      state.cursesData = rowData[curse];
    },
    setSearchTeacherData(state, action) {
      const value = action.payload;
      const data = state.baseTeacherData;
      if (data) {
        const filtered = filterTeachers(data, value);
        state.profileTeachersSearchData = filtered;
      } else {
        state.profileTeachersSearchData = [];
      }
    },
    setGroup(state, action) {
      state.selectedGroup = action.payload;
    },
    setSearchGroup(state, action) {
      const groups = state.groups;
      console.log(action.payload);
      if (groups) {
        state.searchedGroups = groups.filter((item) =>
          item.includes(action.payload),
        );
      } else {
        state.searchedGroups = [];
      }
    },
  },
});

export const {
  setProfilePage,
  setCursesMarks,
  setSearchTeacherData,
  setGroup,
  setSearchGroup,
} = profileSlice.actions;

export default profileSlice.reducer;
