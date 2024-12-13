import { useState, useEffect } from "react";
import { GlobalMediaAsNumber } from "../ui/StandartStyles/StandartStyles.style";

const useScreenSizeCheck = () => {
  const [screenSize, setScreenSize] = useState<string>("desctop");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < GlobalMediaAsNumber.mobile) {
        setScreenSize("mobile");
      } else if (window.innerWidth < GlobalMediaAsNumber.tablet) {
        setScreenSize("tablet");
      } else {
        setScreenSize("desctop");
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return screenSize;
};

export default useScreenSizeCheck;
