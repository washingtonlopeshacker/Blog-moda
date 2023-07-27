import {  ChannelContainer,  Container, DescriptionContainer, TextCard,
    TextContainer, Title, TitleContainer , TextCard1} from "./textcard-styles";

import { useAppContext } from "../../context/openMenu";

interface Props {
title: string
thumbnail: string
channelImage: string
channelName: string
details: string
description:string
}

function TextoCards(props : Props) {
    const { openMenu } = useAppContext();
return (
 <Container openMenu={openMenu}>
   
      <TitleContainer>
        <TextContainer>
          <Title>{props.title}</Title>
          <TextCard>{props.details}</TextCard>
        </TextContainer>
        
        <DescriptionContainer>
          <TextCard>
            {props.description}
          </TextCard>
        </DescriptionContainer>
        <ChannelContainer>
                     
          
          <TextCard1>{props.channelName}</TextCard1>
        </ChannelContainer>
      </TitleContainer>
    </Container>
)
}

export default TextoCards;