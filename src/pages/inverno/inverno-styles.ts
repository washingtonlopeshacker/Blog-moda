import styled from "styled-components";


interface ContainerProps {
  openMenu: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  column-gap: 20px;
  row-gap: 50px;
  flex-wrap: wrap;

  box-sizing: border-box;
`;
export const ContainerCards = styled.div`

  width: 100%;
  display: grid;
  height: 800px;
  grid-template-columns:  repeat(2, 1fr);
  column-gap: 80px;
  row-gap: 0px;
  flex-wrap: wrap;
  padding:  300px ;
  box-sizing: border-box;
`;
export const InvernoContainer = styled.div`
  width: 100%;
`;

