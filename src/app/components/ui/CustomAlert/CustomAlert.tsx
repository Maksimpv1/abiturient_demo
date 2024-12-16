import { FC, useEffect, useState } from "react";
import { useOutsideClick } from "../../hooks/OutSideClick";
import Button from "../Button/Button";
import Cross from "../icons/Cross";
import * as SC from "./CustomAlert.style"
interface ICustomAlert {
    setOpen:()=>void;
    children:string;
}

const CustomAlert: FC<ICustomAlert> = ({setOpen,children}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    useEffect(() => {
          setIsOpen(true);
      }, []);
      
    const handleClose = () => {
        setIsOpen(false)
        setOpen()
    }    
    const modalRef = useOutsideClick(handleClose)
    return(
        <SC.Container open={isOpen}>
            <SC.Shadow>
                <SC.Wrapper ref={modalRef}>                    
                    <SC.Head>
                    <Button icon={<Cross/>} onClick={handleClose}/>
                    </SC.Head>
                    <SC.Content>
                    {children}  
                    </SC.Content>
                </SC.Wrapper>
            </SC.Shadow>
        </SC.Container>
    )
}

export default CustomAlert;