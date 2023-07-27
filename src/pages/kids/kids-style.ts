import styled from "styled-components";

interface ContainerProps {
  openMenu: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  max-width: 1600px;
 
  column-gap: 20px;
  row-gap: 50px;
  flex-wrap: wrap;
  padding: ${({openMenu}) => openMenu? '140px 50px 0 330px' : '140px 50px 0 330px'};
  box-sizing: border-box;
`;

export const ContainerCards = styled.div<ContainerProps>`
  width: 100%;
  display: grid;
  height: 500px;
  
  box-sizing: border-box;
`;

export const KidsContainer = styled.div`
  width: 100%;
`;

export const ContainerCards1 = styled.div<ContainerProps>`
width: 100%;
padding: 100px;
height: 600px;
box-sizing: border-box;
margin-left: 100px;
`;

export const ContainerCards2 = styled.div`
width: 100%;
padding: 200px;
height: 500px;
box-sizing: border-box;
margin-left: 100px;
`;