import styled from 'styled-components'

export const ContainerResultsShort = styled.div`
    height: 500px;
    display: flex;
    flex-direction: column;
    right: 14rem;
    position: absolute;
    align-items: center;
    bottom: -19rem;
    @media screen and (max-width: 1024px) {
        bottom: -24rem;
        left: 14rem;
    }
    @media screen and (max-width: 768px) {
        bottom: -38rem;
    }
`;

export const ContainerShorten = styled.div`
    width: 1000px;
    height: 100px;
    display: flex;
    justify-content: center;
    justify-self: center;
    align-items: center;
    // position: absolute;
    // right: 250px;
    background-color: hsl(257, 27%, 26%);
    gap: 2rem;
    border-radius: 8px;

    @media screen and (max-width: 768px) {
        width: 630px;
    }

    @media screen and (max-width: 542px) {
        flex-direction: column;
        height: 150px;
        width: 350px;
    }
`;

export const Input = styled.input`
    height: 40px;
    width: 700px;
    border-radius: 8px;
    border: none;
    padding-left: 1rem;
    font-weight: 700;
    @media screen and (max-width: 768px) {
        width: 500px;
        margin-left: 1rem;
    }
    @media screen and (max-width: 542px) {
        width: 250px;
        text-align: center;
    }
`;

export const Button = styled.button`
    height: 40px;
    border: none;
    background-color: hsl(180, 66%, 49%);
    color: #fff;
    border-radius: 8px;
    width: 100px;
    font-weight: 700;
    font-size: 14px;
    @media screen and (max-width: 768px) {
        margin-right: 1rem;
    }
`;

export const SectionResult = styled.div`
    margin-top: 1rem;
    width: 950px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;
    border-radius: 8px;

    @media screen and (max-width: 768px) {
        width: 630px;
    }
    @media screen and (max-width: 542px) {
        flex-direction: column;
        width: 350px;
        height: 140px;
`;

export const Original = styled.span`
    width: 600px;
    text-align: left;
    color: hsl(255, 11%, 22%);
    font-weight: 500;
    margin-left: 2rem;

    @media screen and (max-width: 542px) {
        text-align: center;
        width: 350px;
        margin-left: 0rem;
        margin-top: 1rem;
    }
`;

export const Result = styled.span`
    width: 200px;
    color: hsl(180, 66%, 49%);
    font-weight: 700;
    @media screen and (max-width: 768px) {
        margin-right: 1rem;
    }
`;

export const Warning = styled.span`
    position: absolute;
    top: 4.5rem;
    left: 5rem;
    color: hsl(0, 87%, 67%);
    @media screen and (max-width: 1024px) {
        left: -8rem;
    }
    @media screen and (max-width: 542px) {
        top: 3.7rem;
    }
`;

export const ButtonCopy = styled.button`
    background-color:  hsl(180, 66%, 49%);
    border: none;
    border-radius: 8px;
    height: 35px;
    width: 130px;
    color: #fff;
    font-weight: 700;
    font-size: 12px;
    cursor: pointer;
    margin-right: 1rem;

    
    &:hover{
        opacity: 0.6;
    }

    @media screen and (max-width: 542px) {
        margin-bottom: 1rem;
    }
`;

export const ButtonCopied = styled.button`
    background-color:  hsl(257, 7%, 63%);
    border: none;
    border-radius: 8px;
    height: 35px;
    width: 130px;
    color: #fff;
    font-weight: 700;
    font-size: 12px;
    cursor: pointer;
    margin-right: 1rem;

    
    &:hover{
        opacity: 0.6;
    }

    @media screen and (max-width: 542px) {
        margin-bottom: 1rem;
    }
`;

export const Divider = styled.span`
    display: none;
    @media screen and (max-width: 542px) {
        border: 1px solid red;
        width: 350px;
    }
`;

