import styled, { keyframes, css } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const slideUp = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
`;

const slideDown = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(100%);
  }
`;

export const ModalShadow = styled.div<{ open: boolean }>`
  width: 100%;
  height: 100%;
  background-color: rgba(101, 101, 101, 0.4);
  animation: ${({ open }) =>
    open
      ? css`
          ${fadeIn} 0.3s ease-in-out forwards
        `
      : css`
          ${fadeOut} 0.3s ease-in-out forwards
        `};
`;

export const ModalContainer = styled.div<{ open: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: flex-end;
  z-index: 1000;
  pointer-events: ${({ open }) => (open ? "auto" : "none")};
  visibility: ${({ open }) => (open ? "visible" : "hidden")};
  transition: visibility 0.3s ease-in-out;
`;

export const ModalContant = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

export const ModalWrapper = styled.div<{ open: boolean }>`
  position: absolute;
  width: 100%;
  height: 60%;
  background: #ffffff;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  left: 0;
  bottom: 0;
  animation: ${({ open }) =>
    open
      ? css`
          ${slideUp} 0.3s ease-in-out forwards
        `
      : css`
          ${slideDown} 0.3s ease-in-out forwards
        `};
`;
