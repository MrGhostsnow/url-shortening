import styled from 'styled-components'

export const ContainerResultsShort = styled.div`
    height: 500px;
    display: flex;
    flex-direction: column;
    right: 14rem;
    position: absolute;
    align-items: center;
    bottom: -16rem;
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
`;

export const Input = styled.input`
    height: 40px;
    width: 700px;
    border-radius: 8px;
    border: none;
    padding-left: 1rem;
    font-weight: 700;
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
`;

export const Original = styled.span`
    width: 600px;
    text-align: left;
    color: hsl(255, 11%, 22%);
    font-weight: 500;
    margin-left: 2rem;
`;

export const Result = styled.span`
    width: 200px;
    color: hsl(180, 66%, 49%);
    font-weight: 700;
`;

export const Warning = styled.span`
    position: absolute;
    top: 4.5rem;
    left: 5rem;
    color: hsl(0, 87%, 67%);
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
`;

