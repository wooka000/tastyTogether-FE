import { styled } from 'styled-components';

export const TabBox = styled.div`
    margin: 0px auto;
    margin-top: 160px;
    max-width: 1200px;
    height: 400px;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 0 40px 35px 40px;
    background-color: white;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    position: relative;
    display: grid;
    grid-template-columns: repeat(6, 180px);
    grid-template-rows: auto;
    gap: 5px;
    justify-content: center;

    &::-webkit-scrollbar {
        width: 8px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: var(--color-accent);
        border-radius: 4px;
    }

    &::-webkit-scrollbar-track {
        background-color: lightgray;
    }
`;

export const Box = styled.div`
    border: 1px solid gray;
    border-radius: 10px;
    overflow: hidden;
    cursor: pointer;
    height: 180px;
    position: relative;
`;

export const Img = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;

export const Text = styled.div`
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    opacity: 0;
    background-color: black;
    height: 100%;
    padding: 10px;
    transition: all 250ms ease-out;
    &:hover {
        opacity: 0.8;
    }
`;
export const Grade = styled.p`
    font-size: 15px;
    font-weight: bold;
    margin-bottom: 4px;
`;

export const Name = styled.p`
    font-weight: bold;
    margin-bottom: 2px;
    font-size: 18px;
    color: var(--color-accent);
`;

export const Category = styled.p`
    margin-bottom: 4px;
    font-size: 14px;
`;

export const Address = styled.p`
    font-size: 14px;
`;
