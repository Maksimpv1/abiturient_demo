import { styled } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 650px;
  flex: 1;
`;

export const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const LeftBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
`;

export const NonePhoto = styled.div`
  display: flex;
  width: 80px;
  height: 80px;
  background-color: gray;
  border-radius: 100%;
`;

export const RightBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: start;
`;

export const ScheduleContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;
