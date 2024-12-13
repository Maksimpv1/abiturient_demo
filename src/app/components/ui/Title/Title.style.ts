import { styled } from "styled-components";
import { ITitle } from "./Title";
import { GlobalMedia } from "../StandartStyles/StandartStyles.style";

const shouldForwardProp = (prop: string) =>
  !["textAlign", "fontSize", "margin"].includes(prop);

export const MainTitle = styled.h2.withConfig({
  shouldForwardProp: shouldForwardProp,
})<ITitle>`
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : "42px")};
  margin: ${({ margin }) => (margin ? `${margin}` : 0)};
  padding: 0;
  white-space: pre-wrap;
  text-align: ${({ textAlign }) => textAlign || "start"};
  @media ${GlobalMedia.mobile} {
    font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : "28px")};
  }
`;
