import { GlobalMedia } from "@/app/components/ui/StandartStyles/StandartStyles.style";
import styled from "styled-components";

export const MenuContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  @media ${GlobalMedia.mobile} {
    overflow: auto;
    overflow-y: hidden;
    padding: 10px 0;
    min-height: 60px;
    margin-bottom: 10px;
    justify-content: flex-start;
    scrollbar-width: none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const MenuContainerBtn = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 10px;
`;
