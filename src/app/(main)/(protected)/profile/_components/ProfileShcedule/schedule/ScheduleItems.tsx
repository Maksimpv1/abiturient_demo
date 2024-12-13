import { useEffect, useMemo, useState } from "react";
import { IDataItem } from "../../../../../../components/moc/ScheduleData";
import ItemDesctop from "./DeviceContent/ItemDesctop";
import ItemTable from "./DeviceContent/ItemTable";
import useScreenSizeCheck from "@/app/components/hooks/UseScreenSizeCheck";
import ItemMobile from "./DeviceContent/ItemMobile";

interface IType {
  name: string;
  color: string;
}
export interface IItemDesctop {
  item: IDataItem;
  type: IType;
}

const ScheduleItems = ({ item }: { item: IDataItem }) => {
  const [type, setType] = useState<IType>({
    name: "Неизвестный тип",
    color: "gray",
  });
  const [content, setContent] = useState<React.ReactNode>(null);
  const screenSize = useScreenSizeCheck();

  const contentData = useMemo(
    () => [
      { content: <ItemMobile item={item} type={type} />, name: "mobile" },
      { content: <ItemTable item={item} type={type} />, name: "tablet" },
      { content: <ItemDesctop item={item} type={type} />, name: "desctop" },
    ],
    [item, type],
  );

  useEffect(() => {
    switch (item.type) {
      case "1":
        setType({ name: "Лекция", color: "green" });
        break;
      case "2":
        setType({ name: "Пз", color: "yellow" });
        break;
      case "3":
        setType({ name: "Экзамен", color: "red" });
        break;
      default:
        setType({ name: "Неизвестный тип", color: "gray" });
        break;
    }
  }, [item.type, screenSize]);

  useEffect(() => {
    const content = contentData.find((item) => item.name === screenSize);
    setContent(content?.content);
  }, [screenSize, contentData]);

  return <>{content}</>;
};

export default ScheduleItems;
