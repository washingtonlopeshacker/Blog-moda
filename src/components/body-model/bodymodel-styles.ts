import styled from "styled-components";

interface ContainerProps {
  openMenu: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  max-width: 1600px;
  display: grid;
  grid-template-columns: ${({openMenu}) => openMenu? 'repeat(4, 1fr)' : 'repeat(4, 1fr)'};
  column-gap: 40px;
  row-gap: 50px;
  flex-wrap: wrap;
  padding: ${({openMenu}) => openMenu? '140px 50px 0 330px' : '140px 50px 0 330px'};
  box-sizing: border-box;
`;
export const BodyModelContainer = styled.div`
  width: 100%;
`;