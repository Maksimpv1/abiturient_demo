import GlobalAverage from "../ProfileMarks/GlobalAverage";
import { Text } from "@/app/components/ui/StandartStyles/StandartStyles.style";
import * as SC from "./ProfileMain.style";

interface IMainData {
  title: string;
  info: string | React.ReactNode;
}

const mainData: IMainData[] = [
  { title: "Имя Фамилия", info: "" },
  { title: "Студенческий", info: "" },
  { title: "Email :", info: "" },
  { title: "Группа :", info: "" },
];

const ProfileMainContent = () => {
  return (
    <SC.ContentContainer>
      <SC.LeftBox>
        <SC.NonePhoto />
      </SC.LeftBox>
      <SC.RightBox>
        {mainData.map((item, index) => (
          <Text key={index}>{`${item.title} ${item.info}`}</Text>
        ))}
        <GlobalAverage />
      </SC.RightBox>
    </SC.ContentContainer>
  );
};

export default ProfileMainContent;
