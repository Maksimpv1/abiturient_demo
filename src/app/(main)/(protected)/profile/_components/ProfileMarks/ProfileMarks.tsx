"use client";
import Title from "@/app/components/ui/Title/Title";
import * as SC from "./ProfileMarks.style";
import MarksBtns from "./Marksbtns";
import ProfileTable from "./ProfileTable";

const ProfileMarks = () => {
  return (
    <SC.Container>
      <SC.Wrapper>
        <Title textAlign={"center"}>Оценки за семестр:</Title>
        <MarksBtns />
        <ProfileTable />
      </SC.Wrapper>
    </SC.Container>
  );
};
export default ProfileMarks;
