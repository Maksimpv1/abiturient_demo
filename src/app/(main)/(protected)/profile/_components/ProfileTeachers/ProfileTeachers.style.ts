import { styled } from "styled-components";

export const TeachersContainer = styled.div`
  display: flex;
  max-width: 650px;
  flex-direction: column;
  margin: 0 auto;
  align-items: center;
  flex: 1;
`;

export const TeacherContainer = styled.div`
  display: flex;
  margin: 10px 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  padding: 10px;
  transition: 0.3s ease-in-out;
  &:hover {
    transform: translateY(-5px);
    border: 1px solid #8d4850;
    transition: 0.3s ease-in-out;
  }
`;

export const TeacherLeft = styled.div``;

export const LeftIcon = styled.div`
  display: block;
  width: 80px;
  height: 80px;
  background-color: gray;
  border-radius: 100%;
`;

export const TeacherRight = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
`;

export const RightText = styled.h2`
  margin-top: 10px;
`;
export const OneContainer = styled.div<{ margin?: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: ${({ margin }) => margin};
`;

export const SeachContainer = styled.div`
  display: flex;
  margin: 0 auto;
  width: 100%;
`;
export const TeacherOneInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
