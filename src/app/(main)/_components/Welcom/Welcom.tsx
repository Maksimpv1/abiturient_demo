"use client";

import * as SC from "./Welcom.style";
import { Wrapper } from "@/app/components/ui/StandartStyles/StandartStyles.style";
import Button from "@/app/components/ui/Button/Button";
import { useRouter } from "next/navigation";

const WelcomWeb = () => {
  const router = useRouter();

  const handleClickLogin = () => {
    router.push("/login");
  };
  const handleClickRegistration = () => {
    router.push("/registration");
  };
  return (
    <div style={{ height: "100%" }}>
      <Wrapper>
        <SC.TitleW>
          Добро пожаловать в<br /> личный кабинет
        </SC.TitleW>
        <SC.BtnContainer>
          <Button onClick={handleClickLogin} fontSize={"24"} text={"Войти"} />
          <Button
            onClick={handleClickRegistration}
            fontSize={"24"}
            text={"Регистрация"}
          />
        </SC.BtnContainer>
      </Wrapper>
    </div>
  );
};

export default WelcomWeb;
