"use client";

import { Container } from "@/app/components/ui/StandartStyles/StandartStyles.style";
import * as SC from "./ProfileMain.style";
import ProfileMainContent from "./ProfileMainContent";
import ProfileMainSchedule from "./ProfileMainSchedule";

const ProfileMain = () => {
  return (
    <Container>
      <SC.Wrapper>
        <ProfileMainContent />
        <ProfileMainSchedule />
      </SC.Wrapper>
    </Container>
  );
};
export default ProfileMain;
