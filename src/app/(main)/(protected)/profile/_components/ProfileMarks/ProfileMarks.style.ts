import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 650px;
  flex: 1;
  margin: 0 auto;
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  border-top: 1px solid #8d4850;
  border-bottom: 1px solid #8d4850;
  &:not(:first-child):not(:last-child) {
    border-bottom: none;
  }
`;
export const Block = styled.div<{ $bg?: string; color?: string }>`
  display: flex;
  flex: 1;
  border-right: 1px solid ${({ color }) => color || "#8D4850"};
  border-left: 1px solid ${({ color }) => color || "#8D4850"};
  justify-content: center;
  min-height: 60px;
  align-items: center;
  color: ${({ color }) => color};
  background-color: ${({ $bg }) => $bg || "#FFFFFF"};

  &:first-child {
    border-right: none;
  }
  &:not(:first-child):not(:last-child) {
    border-right: none;
  }
`;

export const BtnContainer = styled.div`
  display: flex;
  margin: 20px 0;
  justify-content: space-between;
`;

export const BtnWrapper = styled.div`
  margin-right: 5px;
`;

export const BtnContent = styled.div`
  display: flex;
`;
