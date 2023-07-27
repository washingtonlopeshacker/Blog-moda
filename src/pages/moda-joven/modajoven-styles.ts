import styled from "styled-components";

interface ContainerProps {
  openMenu: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  height:600px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  padding: 200px;
  box-sizing: border-box;
  
`;

export const ModaJovenContainer = styled.div`
  width: 100%;
  
  
`;

export const ContainerCards = styled.div`

  width: 100%;
  display: grid;
  height: 600px;
  grid-template-columns:  repeat(3, 1fr);
  column-gap: 60px;
  row-gap: 20px;
  flex-wrap: wrap;
  padding:  200px ;
  box-sizing: border-box;
  
  
`;

export const ContainerCards1 = styled.div`
  width: 100%;
  column-gap: 30px;
  row-gap: 0px;
  flex-wrap: wrap;
  box-sizing: border-box;
  
  `;

export const ContainerCards2 = styled.div`

  width: 90%;
  display: grid;
  grid-template-columns:  repeat(4, 1fr);
  column-gap: 60px;
  row-gap: 20px;
  flex-wrap: wrap;
  padding:  200px ;
  box-sizing: border-box;
 
`;

export const ContainerCards3 = styled.div`
  width: 80%;
  flex-wrap: wrap;
  margin-left: 230px;
  margin-top: 80px;
  box-sizing: border-box;
  margin-top: 100px;
`;