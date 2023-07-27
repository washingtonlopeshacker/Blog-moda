import { CardModel, DetailsCardModel, ThumbnailCardModel, TitleCardModel } from './cardmodel-styles'

interface Props {
  title: string
  thumbnail: string
  details: string
}

function CardsModel(props: Props) {

  

  return (
    <CardModel>
      <ThumbnailCardModel alt='Thumbnail' src={props.thumbnail}/>
      <TitleCardModel>{props.title}</TitleCardModel>
      <DetailsCardModel>{props.details}</DetailsCardModel>
    </CardModel>
  )
}

export default  CardsModel;