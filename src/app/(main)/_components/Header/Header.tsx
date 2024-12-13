"use client";

import Image from "next/image";
import * as SC from "./Header.style";
import { usePathname, useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const handleClick = () => {
    if (pathname != "/") router.push("/");
  };
  return (
    <SC.ImgContainer>
      <Image
        src="/img/logo_univers.png"
        alt="logo"
        width={400}
        height={120}
        onClick={handleClick}
        priority
      />
    </SC.ImgContainer>
  );
};

export default Header;
