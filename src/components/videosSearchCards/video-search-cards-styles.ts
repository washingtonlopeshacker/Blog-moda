import styled from "styled-components";
interface ContainerProps {
  openMenu: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 70%;
  cursor: pointer;
  display: flex;
  column-gap: 30px;
  justify-content:space-around;
  padding: ${({openMenu}) => openMenu? '140px 10px 0 330px' : '140px 10px 0 330px'};
`;

export const Banner = styled.div`
  width:100%;
  min-width: 500px;
  max-width: 500px;
  height: 300px;
  border-radius: 12px;
  background-size: cover;
  background-position: 0% 50%;
 
 
`

export const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  
`;

export const ChannelImage = styled.div`
 
  min-width: 50px;
  max-width: 50px;
  min-height: 50px;
  max-height: 50px;
  font-size: 18px;
  border-radius: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  background-size: cover;
  background-position: 50% 50%;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 400px;
  max-width: 400px;
  font-weight: 400;
`;

export const ChannelContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  

`;

export const Title = styled.span`
  font-weight: 500;
  color: #0f0f0f;
  min-width: 300px;
  max-width: 300px;
  
`;

export const TextCard = styled.span`
  color: #0057e7;
  font-size: 18px;
  font-weight: 500;
`;

export const TextCard1 = styled.span`
  color:#0f0f0f;
  font-size: 18px;
  font-weight: 500;
`;

export const DescriptionContainer = styled.div`
  overflow: hidden;
  min-width: 400px;
  max-width: 400px;

`;