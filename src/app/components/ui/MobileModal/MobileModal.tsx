import { FC, useEffect, useRef, useState } from "react";
import * as SC from "./MobileModal.style";
import Button from "../Button/Button";
import { useOutsideClick } from "../../hooks/OutSideClick";

interface IMobileModal {
  openModal: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

const MobileModal: FC<IMobileModal> = ({ openModal, onClose, children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const modalRef = useOutsideClick(onClose);

  useEffect(() => {
      setIsOpen(true);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  return (
    <SC.ModalContainer open={isOpen}>
      <SC.ModalShadow open={isOpen}>
        <SC.ModalWrapper open={isOpen} ref={modalRef}>
          <SC.ModalContant>
            <Button width={"70"} text={"Закрыть"} onClick={handleClose} />
            {children}
          </SC.ModalContant>
        </SC.ModalWrapper>
      </SC.ModalShadow>
    </SC.ModalContainer>
  );
};
export default MobileModal;
