import Link from "next/link";
import styled from "styled-components";

export const GlobalMedia = {
  mobile: "(max-width: 516px)",
  tablet: "(max-width: 1180px)",
};

export const GlobalMediaAsNumber = {
  mobile: 516,
  tablet: 1180,
  desktop: 1920,
};

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media ${GlobalMedia.mobile} {
    justify-content: flex-start;
  }
`;

export const BtnFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;
export const Text = styled.p`
  font-size: 20px;
  margin: 0;
  padding: 0;
  white-space: pre-wrap;
`;

export const StyledLink = styled(Link)`
  text-decoration: underline;
  margin: 10px;
  &:hover {
    color: #7a585c;
  }
`;
