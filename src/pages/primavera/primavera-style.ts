import styled from "styled-components";


interface ContainerProps {
  openMenu: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  column-gap: 20px;
  flex-wrap: wrap;
  box-sizing: border-box;
  
`;
export const ContainerCards = styled.div`

  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: 600px;
  column-gap: 80px;
  row-gap: 0px;
  flex-wrap: wrap;
  padding:  200px ;
  box-sizing: border-box;
`;

export const ContainerSuperCards = styled.div`

  width: 100%;
  display: grid;
  height: 800px;
  flex-wrap: wrap;
  padding:  200px ;
  box-sizing: border-box;
`;

export const ContainerCards3 = styled.div`
  width: 80%;
  flex-wrap: wrap;
  margin-left:220px;
  margin-top: 50px;
  box-sizing: border-box;
`;

export const PrimaveraContainer = styled.div`
  width: 100%;
  
`;

