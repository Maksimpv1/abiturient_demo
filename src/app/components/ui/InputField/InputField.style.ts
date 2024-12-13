import { styled } from "styled-components";
import { GlobalMedia } from "../StandartStyles/StandartStyles.style";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  @media ${GlobalMedia.mobile} {
    width: 100%;
  }
`;
export const TextContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TextField = styled.input`
  width: 100%;
  height: 50px;
  font-size: 18px;
  color: #8d212d;
  border: 1px solid #b8b8b8;
  transition: 0.2 ease-in-out;
  border-radius: 5px;
  &:hover {
    border: 1px solid #8d212d;
    transition: 0.2 ease-in-out;
  }
  &:focus {
    border: 2px solid #8d212d;
    outline: none;
    transition: 0.2 ease-in-out;
  }
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px white inset !important;
    -webkit-text-fill-color: #8d212d !important;
  }
`;
