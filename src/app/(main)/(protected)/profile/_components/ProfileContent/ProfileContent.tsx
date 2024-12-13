"use client";

import { useAppSelector } from "@/app/lib/storeHooks";
import { IMenuDate, menuData } from "../ProfileMenu/ProfileMenu";
import { useEffect, useState } from "react";

const ProfileContent = () => {
  const idPage = useAppSelector((state) => state.profile.profilePage);
  const [currentPage, setCurrentPage] = useState<IMenuDate>();

  useEffect(() => {
    setCurrentPage(menuData.find((item) => item.id === idPage));
  }, [idPage]);

  return <>{currentPage && currentPage.content}</>;
};
export default ProfileContent;
