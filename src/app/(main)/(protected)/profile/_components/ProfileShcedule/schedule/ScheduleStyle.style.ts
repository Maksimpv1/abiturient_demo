import { GlobalMedia } from "@/app/components/ui/StandartStyles/StandartStyles.style";
import styled from "styled-components";

export const ScheduleContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ScheduleContainerWeek = styled.div`
  display: flex;
  margin-top: 20px;
  flex-direction: column;
  width: 100%;
`;

export const DayContainer = styled.div`
  display: flex;
  margin-top: 20px;
  flex-direction: column;
  background-color: #f0efed;
  border-radius: 15px;
  width: 100%;
  @media ${GlobalMedia.mobile} {
    background: none;
  }
`;

export const DayText = styled.p`
  font-size: 18px;
  text-align: center;
`;

export const ScheduleItemBox = styled.div`
  display: flex;
  margin: 0 15px;
  justify-content: center;
  align-items: center;
  min-width: 100px;
  @media ${GlobalMedia.tablet} {
    min-width: 0px;
  }
`;
export const ItemTypeColor = styled.span<{ $bg?: string }>`
  display: block;
  border-radius: 5px;
  height: 30px;
  border: 2px solid ${({ $bg }) => $bg};
  @media ${GlobalMedia.tablet} {
    height: 50px;
  }
`;
export const ScheduleItemInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px 0;
`;

export const ScheduleText = styled.p`
  text-align: start;
`;

export const Icon = styled.div`
  display: block;
  width: 50px;
  height: 50px;
  background-color: gray;
  border-radius: 100%;
`;

export const TableBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;
export const TableContainer = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(4, 1fr);
  padding: 0 20px;
  @media (max-width: 530px) {
    grid-template-columns: repeat(2, 1fr) 30px 1fr;
  }
  @media ${GlobalMedia.mobile} {
    grid-template-columns: repeat(3, 1fr);
    background-color: #f0efed;
    border-radius: 15px;
  }
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px 0;
`;

export const ModalDetailsContaner = styled.div`
  display: flex;
  background-color: #f0efed;
  flex-direction: column;
  margin: 10px 0;
  width: 100%;
  border-radius: 15px;
  padding: 10px;
`;

export const ModalTeacher = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
