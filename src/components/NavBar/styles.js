import styled from "styled-components";

export const ContainerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  @media screen and (max-width: 768px) {
  }
`;

export const SectionLogo = styled.div`
  width: 30%;
`;

export const Logo = styled.img``;

export const SectionPaths = styled.div``;

export const ListPaths = styled.ul`
  display: flex;
  list-style-type: none;
  justify-content: space-between;
  width: 600px;
`;

export const Path = styled.li`
  font-size: 15px;
  font-weight: 500;
  color: hsl(257, 7%, 63%);
  cursor: pointer;

  &:hover {
    color: hsl(227, 12%, 61%);
  }
`;

export const SectionButton = styled.div`
  width: 30%;
`;

export const Button = styled.button`
  background-color: hsl(257, 27%, 26%);
  border: none;
  border-radius: 15px;
  height: 35px;
  width: 130px;
  color: white;
  font-weight: 700;
  font-size: 12px;
  cursor: pointer;

  &:hover {
    opacity: 0.6;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 2;
  cursor: pointer;
  align-items: center;
`;

export const SectionMobile = styled.div`
  display: flex;
  width: 90%;
  justify-content: space-between;
  align-items: center;
  margin-left: 1rem;
`;

export const SectionMenu = styled.div``;

export const SectionPathsMobile = styled.div`
  display: flex;
  justify-content: center;
  justify-self: center;
  align-items: center;
  margin-top: 3rem;
  width: 300px;
  height: 250px;
  background-color: hsl(257, 27%, 26%);
  border-radius: 8px;
`;

export const ListPathsMobile = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  justify-content: space-between;
  width: 600px;
  padding: 0;
  gap: 1.5rem;
`;

export const PathMobile = styled.li`
  font-size: 15px;
  font-weight: 700;
  color: #fff;
  cursor: pointer;
  padding: 0;
  &:hover {
    color: hsl(227, 12%, 61%);
  }
`;

export const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 300px;
  align-items: center;
  margin-top: 1rem;
`;

export const Icon = styled.img`
  margin-top: -0.5rem;
`;
