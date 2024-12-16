import { styled } from "styled-components";

export const Container = styled.div`
    display: flex;
    position: absolute;
    right: 3px;
    bottom: 3px;
    min-height: 150px;
    min-width: 300px;
    box-shadow: 0 5px 10px 1px rgba(0, 0, 0, 0.2);
    background-color: #FFFFFF;
    align-items: center;
`;
export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    padding: 5px;
    height: 100%;
    width: 100%;
`;