import Title from "@/app/components/ui/Title/Title";
import { rowData } from "./MarksData";
import { calculateAverage } from "@/app/components/hooks/СalculateAverage";
import useScreenSizeCheck from "@/app/components/hooks/UseScreenSizeCheck";

const GlobalAverage = () => {
  const screenSize = useScreenSizeCheck();
  const globlaAverage = () => {
    const subjects = Object.values(rowData).flatMap((item) =>
      Object.values(item),
    );
    const marks = Object.values(subjects).flatMap((item) =>
      Object.values(item),
    );
    return calculateAverage(marks);
  };

  return (
    <>
      {screenSize === "mobile" ? (
        <Title fontSize={"16"}>Общий Ср.б.: {globlaAverage()}</Title>
      ) : (
        <Title fontSize={"20"}>Общий средний балл: {globlaAverage()}</Title>
      )}
    </>
  );
};

export default GlobalAverage;
