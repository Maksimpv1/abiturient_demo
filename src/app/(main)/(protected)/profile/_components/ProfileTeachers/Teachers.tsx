"use client";

import Link from "next/link";
import * as SC from "./ProfileTeachers.style";
import TeacherFront from "./TeacherFront";
import { use, useState } from "react";
import { teacherData } from "../../../../../components/moc/TeacherData";
import TeacherSearch from "./TeacherSearch";
import { useAppSelector } from "@/app/lib/storeHooks";

const Teachers = () => {
  const searchData = useAppSelector(
    (item) => item.profile.profileTeachersSearchData,
  );

  return (
    <SC.TeachersContainer>
      <TeacherSearch />
      {searchData.map((item, index) => (
        <Link
          style={{ width: "100%" }}
          key={index}
          href={`/profile/${item.id}`}
        >
          <TeacherFront {...item} />
        </Link>
      ))}
    </SC.TeachersContainer>
  );
};
export default Teachers;
