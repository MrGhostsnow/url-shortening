import styled from "styled-components";

export const ContainerNavBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    width: 80%;
    margin-left: 10rem;
`;

export const SectionPaths = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 400px;
`;

export const Logo = styled.img`
    height: 30px;
`;

export const Paths = styled.ul`
    display: flex;
    justify-content: space-between;
    list-style-type: none;
    width: 400px;
`;

export const Path = styled.li`
    display: flex;
    justify-content: space-between;
    color: hsl(0, 0%, 75%);
    font-weight: 700;
    font-size: 14px;
`;

export const SectionButtons = styled.div`
    display: flex;
    gap: 2rem;
`;

export const Login = styled.button`
    border: none;
    color: hsl(0, 0%, 75%);
    background-color: transparent;
    font-weight: 700;
    font-size: 14px;
`;

export const SignUp = styled.button`
    border: none;
    background-color: hsl(180, 66%, 49%);
    color: #fff;
    border-radius: 15px;
    height: 30px;
    width: 90px;
    font-weight: 700;
    font-size: 14px;
`;