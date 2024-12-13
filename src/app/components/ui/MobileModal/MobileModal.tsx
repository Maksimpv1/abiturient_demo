import { FC, useEffect, useRef, useState } from "react";
import * as SC from "./MobileModal.style";
import Button from "../Button/Button";

interface IMobileModal {
  openModal: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

const MobileModal: FC<IMobileModal> = ({ openModal, onClose, children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const modal = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleOutClick = (event: MouseEvent) => {
      if (modal.current && !modal.current.contains(event.target as Node)) {
        handleClose();
      }
    };
    if (openModal) setIsOpen(true);
    document.addEventListener("click", handleOutClick);

    return () => document.removeEventListener("click", handleOutClick);
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
        <SC.ModalWrapper open={isOpen} ref={modal}>
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
