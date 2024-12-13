import ProfileMenu from "./_components/ProfileMenu/ProfileMenu";

const ProfileLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ProfileMenu />
      {children}
    </>
  );
};

export default ProfileLayout;
