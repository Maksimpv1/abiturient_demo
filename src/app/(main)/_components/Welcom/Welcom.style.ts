import { GlobalMedia } from "@/app/components/ui/StandartStyles/StandartStyles.style";
import Title from "@/app/components/ui/Title/Title";
import { styled } from "styled-components";

export const TitleW = styled(Title)`
  white-space: pre-wrap;
  text-align: center;
  line-height: 44px;
  font-weight: 150;
  color: #8d212d;
  @media ${GlobalMedia.mobile} {
    line-height: 30px;
  }
`;

export const BtnContainer = styled.div`
  display: flex;
  width: 400px;
  justify-content: space-between;
  align-items: center;
  margin-top: 150px;
  @media ${GlobalMedia.mobile} {
    width: 100%;
  }
`;
