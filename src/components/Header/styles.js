import styled from "styled-components";


export const SectionHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 2rem;

    @media screen and (max-width: 1024px) {
        justify-content: center;
    }
    @media screen and (max-width: 768px) {
        flex-direction: column;
        margin-top: 0;
    }
    @media screen and (max-width: 542px) {
        flex-direction: column-reverse;
        margin-top: 2rem;
    }
`;

export const SectionText = styled.div`
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 1024px) {
        width: 50%;
        margin-left: -10rem;
        height: 550px;
    }
    @media screen and (max-width: 768px) {
        margin-left: 0rem;
        width: 80%;
    }
    @media screen and (max-width: 542px) {
        width: 100%;
    }
`;

export const Title = styled.h2`
    font-weight: 700;
    font-size: 62px;
    width: 60%;
    text-align: left;
    color: hsl(257, 27%, 26%);
    margin-bottom: 0;

    @media screen and (max-width: 542px) {
        width: 100%;
        text-align: center;
        margin-top: 0;
    }
`;

export const Subtitle = styled.p`
    color: hsl(257, 7%, 63%);
    font-weight: 500;
    width: 60%;
    text-align: left;
    @media screen and (max-width: 542px) {
        width: 100%;
        text-align: center;
    }
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
    @media screen and (max-width: 1024px) {
        margin-left: -11.5rem;
    }
    @media screen and (max-width: 768px) {
        margin-left: 00rem;
    }
`;

export const SectionImage = styled.div`
    width: 45%;
    
    @media screen and (max-width: 1024px) {
        width: 30%;
    }
    @media screen and (max-width: 768px) {
        width: 80%;
    }
`;

export const Image = styled.img`
    width: 650px;

    @media screen and (max-width: 1024px) {
        width: 400px;
    }

    @media screen and (max-width: 542px) {
        width: 100%;
        text-align: center;
    }
`;