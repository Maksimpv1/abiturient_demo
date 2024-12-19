import { FC, useEffect, useState } from "react";
import * as SC from "./Button.style";

export interface ButtonType {
  width?: string;
  height?: string;
  fontSize?: string;
  background?: string;
  text?: string;
  onClick?: () => void;
  type?: string;
  $activeshow?: boolean;
  borderRadius?: string;
  margin?: string;
  icon?:React.ReactNode;
}

const Button: FC<ButtonType> = (props) => {
  const [iconValue, setIconValue] = useState<boolean>(false)

  useEffect(()=>{
    if(props.icon) setIconValue(true)
  },[])

  return (
    <SC.Button
      onClick={props.onClick}
      width={props.width}
      height={props.height}
      fontSize={props.fontSize}
      background={props.background}
      type={props.type}
      borderRadius={props.borderRadius}
      $activeshow={props.$activeshow}
      margin={props.margin}
      icon={iconValue}
    >
      {props.icon ? props.icon : props.text}
    </SC.Button>
  );
};
export default Button;
