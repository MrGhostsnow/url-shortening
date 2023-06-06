import styled from "styled-components";

export const ContainerBanner = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: hsl(257, 27%, 26%);
    height: 200px;
    margin-top: 5rem;
    @media screen and (max-width: 542px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 400px;
    }
`;

export const Text = styled.h2`
    font-size: 34px;
    font-weight: 700;
    color: #fff;
    width: 25%;
    text-align: left;
    margin-left: 8rem;
    @media screen and (max-width: 1440px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        margin-left: 0;
    }
    @media screen and (max-width: 542px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        margin-left: 0;
        text-align: center;
    }
`;

export const Button = styled.button`
    background-color:  hsl(180, 66%, 49%);
    border: none;
    border-radius: 15px;
    height: 35px;
    width: 130px;
    color: #fff;
    font-weight: 700;
    font-size: 12px;
    cursor: pointer;
    margin-right: 8rem;

    &:hover{
        opacity: 0.6;
    }

    @media screen and (max-width: 1440px) {
        margin-right: 0;
    }
    @media screen and (max-width: 542px) {
        margin-right: 0;
    }

`;

export const SectionText = styled.div`
@media screen and (max-width: 1440px) {
    display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
}
@media screen and (max-width: 542px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
`;