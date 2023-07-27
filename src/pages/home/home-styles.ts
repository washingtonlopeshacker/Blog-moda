import styled from "styled-components";

interface ContainerProps {
  openMenu: boolean;
}

interface ClearButtonProps {
  clearButton: boolean;
}

export const Container1 = styled.div`
  width: 100%;
  height: 300px;


`;



export const Container = styled.div<ContainerProps>`

  width: 100%;
  height: 500px;
  max-width: 1600px;
  display: grid;
  grid-template-columns: ${({openMenu}) => openMenu? 'repeat(4, 1fr)' : 'repeat(4, 1fr)'};
  column-gap: 20px;
  
  flex-wrap: wrap;
`;

export const MainContainer = styled.div<ContainerProps>`
  width: 100%;
  max-width: 1600px;
  display: flex;
  flex-direction: column;
  padding: 290px;
  box-sizing: border-box;
`;
export const HomeContainer = styled.div`
  width: 100%;
  
`;



export const ClearButton = styled.button<ClearButtonProps>`
 
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  transition: .4s;
  background-color: ${({theme}) => theme.colors.secondary};
  &:hover{
    background-color: ${({theme}) => theme.colors.borderColor};
  }
`;

export const CloseImg = styled.img`
  width: 15px;
`;