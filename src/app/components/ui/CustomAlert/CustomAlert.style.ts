import { styled } from "styled-components";

export const Container = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
`;

export const Shadow = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;    
    background-color: rgba(101, 101, 101, 0.4);
`;

export const Wrapper = styled.div`
    display: flex;
    min-width: 370px;
    min-height: 100px;
    border-radius: 15px;
    background-color: #FFFFFF;
`;