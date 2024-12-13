import { useOutsideClick } from "../../hooks/OutSideClick";
import * as SC from "./CustomAlert.style"

const CustomAlert = () => {
    const handleClose = () => {
        console.log(123)
    }    
    const modalRef = useOutsideClick(handleClose)
    return(
        <SC.Container>
            <SC.Shadow>
                <SC.Wrapper ref={modalRef}>

                </SC.Wrapper>
            </SC.Shadow>
        </SC.Container>
    )
}

export default CustomAlert;