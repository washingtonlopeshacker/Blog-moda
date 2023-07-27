import { Banner, ChannelContainer, ChannelImage, Container, DescriptionContainer, TextCard,
         TextContainer, Title, TitleContainer , TextCard1} from "./video-search-cards-styles";

import { useAppContext } from "../../context/openMenu";

interface Props {
  title: string
  thumbnail: string
  channelImage: string
  channelName: string
  details: string
  description: string
}

function VideoCard(props : Props) {

  const { openMenu } = useAppContext();
  return (
    <Container openMenu={openMenu}>
      <Banner style={{backgroundImage: `url(${props.thumbnail})`}}></Banner>
      <TitleContainer>
        <TextContainer>
          <Title>{props.title}</Title>
          <TextCard>{props.details}</TextCard>
        </TextContainer>
        <ChannelContainer>
          <ChannelImage style={{backgroundImage: `url(${props.channelImage})`}}>
            
          </ChannelImage>
          <TextCard1>{props.channelName}</TextCard1>
        </ChannelContainer>
        <DescriptionContainer>
          <TextCard>
            {props.description}
          </TextCard>
        </DescriptionContainer>
      </TitleContainer>
    </Container>
  )
}

export default VideoCard;