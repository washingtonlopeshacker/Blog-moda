import styled from "styled-components";
interface ContainerProps {
  openMenu: boolean;
}

export const Container = styled.div<ContainerProps>`
    width: 100%;
    cursor: pointer;
    display: flex;
    column-gap: 50px;
    justify-content:space-around;
`;

export const Banner = styled.div`
  
 
`;

export const TitleContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom:20px
`;

export const ChannelImage = styled.div`
 
  
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 800px;
  max-width: 800px;
  font-weight: 400;
  margin-bottom:20px
`;

export const ChannelContainer = styled.div`
  display: flex;
  align-items: center;
  
 


`;

export const Title = styled.span`

  font-weight: 500;
  color: #0f0f0f;
  
`;

export const TextCard = styled.span`

  color: #0057e7;
  font-size: 18px;
  font-weight: 500;
  
`;

export const TextCard1 = styled.span`
  min-width: 900px;
  max-width: 900px;
  font-weight: 400;
  color:#0f0f0f;
  font-size: 18px;
  font-weight: 500;
  margin-bottom:20px
`;

export const DescriptionContainer = styled.div`
margin-bottom:20px; 


`;