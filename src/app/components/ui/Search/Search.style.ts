import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  max-width: 650px;
  margin: 0 auto;
`;

export const SearchInput = styled.input`
  border: 1px solid #8d212d;
  width: 100%;
  height: 60px;
  border-radius: 15px;
  font-size: 20px;
  color: #8d212d;
  transition: 0.2 ease-in-out;
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
