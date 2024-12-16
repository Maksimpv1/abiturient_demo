import { styled } from "styled-components";
import { ButtonType } from "./Button";

const shouldForwardProp = (prop: string) =>
  ![
    "$activeshow",
    "background",
    "borderRadius",
    "width",
    "height",
    "fontSize",
    "margin",
    "icon",
  ].includes(prop);

export const Button = styled.button.withConfig({
  shouldForwardProp: shouldForwardProp,
})<ButtonType>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ $activeshow, background }) =>
    $activeshow ? "#8d212d" : background ? background : "#FFFFF"};
  border-radius: ${(props) =>
    props.borderRadius ? `${props.borderRadius}px` : "15px"};
  border: 1px solid #8d212d;
  color: ${({ $activeshow }) => ($activeshow ? "#FFFFFF" : "#8d212d")};
  padding: ${({icon})=> icon ? "3px" : "10px"};
  width: ${(props) => (props.icon ? "30px" : props.width ? `${props.width}px` : "px")};
  height: ${(props) => (props.icon ? "30px" :props.height ? `${props.height}px` : "px")};
  font-size: ${(props) => (props.fontSize ? `${props.fontSize}px` : "14px")};
  transition: 0.3s ease-in-out;
  margin: ${({ margin }) => margin};
  transition:0.1s ease-in-out;
  &:hover {
    transition: 0.3s ease-in-out;
    background-color: ${({icon})=> icon ? 'none' : "#8d4850" };
    color: white;
    svg{
    scale:0.9;
    transition:0.1s ease-in-out;
    }
  }
  svg{
    width:15px;
    height:15px;
  }
`;
