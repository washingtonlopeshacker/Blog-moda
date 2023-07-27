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
    width: 600px;
    height: 500px;
    border-radius: 5px;
    background-size: cover;
    background-position: 50% 50%;
    margin-bottom:30px
 
 
 
`;

export const TitleContainer = styled.div`
    width: 100%;
    width: 400px;
    display: flex;
    flex-direction: column;
`;

export const ChannelImage = styled.div`
 
  width: 200px;
  height: 300px;
  font-size: 18px;
  border-radius: 10%;
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