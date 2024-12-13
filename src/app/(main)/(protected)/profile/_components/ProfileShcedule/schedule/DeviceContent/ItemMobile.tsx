import { FC, useState } from "react";
import { IItemDesctop } from "../ScheduleItems";
import * as SC from "../ScheduleStyle.style";
import Link from "next/link";
import SmallScreenTime from "./SmallScreenTime";
import TeachersAndGroups from "./TeachersAndGroups";
import MobileModal from "@/app/components/ui/MobileModal/MobileModal";
import ModalContant from "./ModalContant";

const ItemMobile: FC<IItemDesctop> = ({ item, type }) => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleModalOpen = () => {
    setOpenModal(!openModal);
  };
  const handleModalClose = () => {
    setOpenModal(!openModal);
  };
  return (
    <>
      {openModal && (
        <MobileModal openModal={openModal} onClose={handleModalClose}>
          <ModalContant item={item} type={type} />
        </MobileModal>
      )}
      <SC.TableContainer onClick={handleModalOpen}>
        <SmallScreenTime
          timeEnd={item.timeEnd}
          timeStart={item.timeStart}
          color={type.color}
        />
        <SC.TableBox>
          <SC.ScheduleText>{item.name}</SC.ScheduleText>
          <SC.ScheduleText>{item.room}</SC.ScheduleText>
        </SC.TableBox>
        <TeachersAndGroups group={item.group} />
      </SC.TableContainer>
    </>
  );
};
export default ItemMobile;
