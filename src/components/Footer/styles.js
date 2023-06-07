import styled from "styled-components";

export const ContainerFooter = styled.div`
    background-color: hsl(260, 8%, 14%);
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 200px;
    @media screen and (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 400px;
    }
`;

export const SectionOne = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 500px;
    height: 85px;
    @media screen and (max-width: 1024px) {
        margin-left: 1.5rem;
    }
    @media screen and (max-width: 542px) {
        width: 300px;
        margin-left: 0rem;
    }
`;

export const SectionSocials = styled.div`
    display: flex;
    justify-content: space-between;
    width: 200px;
`;

export const Social = styled.img`

`;

export const SectionTwo = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media screen and (max-width: 768px) {
        text-align: center;
        justify-content: center;
        align-items: center;
        margin-top: 1rem;
        width: 300px;
    }
`;

export const Options = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 200px;
    text-align: left;
    height: 125px;
    @media screen and (max-width: 768px) {
        text-align: center;
    }
`;

export const Option = styled.li`
    color: hsl(0, 0%, 98%);
    list-style-type: none;
    font-weight: 700;
    font-size: 14px;
    cursor: pointer;
    &:hover{
        color: hsl(12, 88%, 59%);
    }
`;

export const SectionThree = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 500px;
    height: 95px;
    @media screen and (max-width: 1024px) {
        margin-right: 1.5rem;
    }
    @media screen and (max-width: 768px) {
        margin-top: 1rem;
        margin-right: 0rem;
    }
    @media screen and (max-width: 542px) {
        width: 300px;
    }
`;

export const SectionEmail = styled.form`
    display: flex;
    gap: 1rem;
`;

export const Input = styled.input`
    border: none;
    border-radius: 15px;
    height: 35px;
    width: 200px;
    color: hsl(0, 0%, 98%);
    padding-left: 1rem;
    font-weight: 500;
    font-size: 12px;
    cursor: pointer;
`;

export const Button = styled.input`
    background-color:  hsl(255, 11%, 22%);
    border: none;
    border-radius: 15px;
    height: 35px;
    width: 50px;
    color: white;
    font-weight: 700;
    font-size: 12px;
    cursor: pointer;
`;

export const Copyright = styled.p`
    color: hsl(0, 0%, 98%);
    font-size: 12px;
`;

export const Logo = styled.img``;