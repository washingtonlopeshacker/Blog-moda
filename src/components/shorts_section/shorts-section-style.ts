import styled from "styled-components";

interface ContainerProps {
  openMenu: boolean;
}

export const MainContainer = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px;
  
`;

export const Container = styled.div<ContainerProps>`
  width:80%;
  height: 300px;
  display: flex;
  column-gap: 10px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 10px;

`;



export const ShortsLogo = styled.img`
  width: 100px;
  margin-left:  10px;
  margin-bottom: 30px;
`;