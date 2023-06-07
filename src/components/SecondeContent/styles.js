import styled from 'styled-components'


export const ContainerSecondContent = styled.div`
    background-color: hsl(0, 0%, 95%);
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: end;
`;

export const SectionText = styled.div`
    margin-bottom: 4rem;
`;

export const Title = styled.h2`
    font-weight: 700;
    font-size: 42px;
    
    color: hsl(257, 27%, 26%);
    margin-bottom: 0;
`;

export const SubTitle = styled.p`
    color: hsl(257, 7%, 63%);
    font-weight: 500;
`;

export const SectionCards = styled.div`
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin-bottom:4rem;
`;

export const Image = styled.img`
    position: relative;
    top: -2.5rem;
    border-radius: 50%;
    padding: 1rem;
    background-color: hsl(257, 27%, 26%);
`;

export const FirstCard = styled.div`
    box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    width: 300px;
    background-color: #fff;
    text-align: left;
    padding: 1rem;
`;

export const SecondCard = styled.div`
    box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    width: 300px;
    background-color: #fff;
    text-align: left;
    padding: 1rem; 
    `;

export const ThirdCard = styled.div`
    box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    width: 300px;
    background-color: #fff;
    text-align: left;
    padding: 1rem;
`;

export const TitleCard = styled.p`
    color: hsl(257, 27%, 26%);
    font-weight: 700;
    margin-top: -2rem;
`;

export const TextCard = styled.span`
    color: hsl(257, 7%, 63%);
    font-weight: 500;
    font-size: 14px;
    width: 80%;
    margin-right: 0.2rem;
`;