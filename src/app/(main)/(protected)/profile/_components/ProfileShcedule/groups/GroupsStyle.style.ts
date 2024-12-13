import Cross from "@/app/components/ui/icons/Cross";
import Facebook from "@/app/components/ui/icons/Facebook";
import { styled } from "styled-components";

export const GroupsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 20px auto 0 auto;
  align-items: center;
`;

export const GroupContainer = styled.div`
  display: flex;
  border-radius: 20px;
  min-width: 100px;
  background-color: #8d5057;
  align-items: center;
  height: 35px;
  padding: 0 10px;
  margin-right: 10px;
  transition: 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    transition: 0.3s ease-in-out;
    background-color: #8d5057;
    background-color: #8d212d;
  }
`;

export const Text = styled.p`
  color: #ffffff;
  width: 100%;
  text-align: center;
`;

export const GroupText = styled.p`
  font-size: 20px;
  margin: 20px 0;
`;

export const SvgContainer = styled.div`
  svg {
    width: 15px;
    height: 15px;
    fill: #ffffff;
    transition: 0.3s ease-in-out;
  }

  &:hover {
    svg {
      scale: 0.8;
      transition: 0.3s ease-in-out;
    }
  }
`;

export const ProfileScheduleGroupContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  flex: 1;
  gap: 10px;
`;
