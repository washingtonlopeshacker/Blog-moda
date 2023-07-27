import { Banner, ChannelContainer, ChannelImage, Container, DescriptionContainer, TextCard,
    TextContainer, Title, TitleContainer , TextCard1} from "./supercard-styles";

import { useAppContext } from "../../context/openMenu";

interface Props {
title: string
thumbnail: string
channelImage: string
channelName: string
details: string
description:string
}

function SuperCards(props : Props) {
    const { openMenu } = useAppContext();
return (
 <Container openMenu={openMenu}>
      <Banner style={{backgroundImage: `url(${props.thumbnail})`}}></Banner>
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
          <ChannelImage style={{backgroundImage: `url(${props.channelImage})`}}>
            
          </ChannelImage>
          <TextCard1>{props.channelName}</TextCard1>
        </ChannelContainer>
      </TitleContainer>
    </Container>
)
}

export default SuperCards;