import styled from "styled-components";


export const SectionHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 2rem;
`;

export const SectionText = styled.div`
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.h2`
    font-weight: 700;
    font-size: 62px;
    width: 60%;
    text-align: left;
    color: hsl(257, 27%, 26%);
    margin-bottom: 0;
`;

export const Subtitle = styled.p`
    color: hsl(257, 7%, 63%);
    font-weight: 500;
    width: 60%;
    text-align: left;
`;

export const Button = styled.button`
    border: none;
    background-color: hsl(180, 66%, 49%);
    color: #fff;
    border-radius: 15px;
    height: 40px;
    width: 120px;
    font-weight: 700;
    font-size: 14px;
    margin-left: -22.5rem;
`;

export const SectionImage = styled.div`
    width: 45%;
`;

export const Image = styled.img`
    width: 650px;
`;