import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const ImgBox = styled.div`
  border-radius: 100%;
  padding: 2px;
  background-color: #ffffff;
  margin: 0 0 0 10px;
  border: 1px solid #8d212d;
  svg {
    transition: 0.3s ease-in-out;
  }
  &:hover {
    svg {
      transition: 0.3s ease-in-out;
      scale: 0.8;
    }
  }
`;
