import { Container, BodyModelContainer } from "./bodymodel-styles";
import { useAppContext } from "../../context/openMenu";
import Header from "../../components/header/header";
import Menu from "../../components/menu/menu";
import CardShortVideo from "../../components/cards-shorts-videos/card-short-video";

function BodyModel() {

  const { openMenu } = useAppContext();

  return (
    <BodyModelContainer>
      <Header />
      <Menu />
      <Container openMenu={openMenu}>
      <CardShortVideo 
        thumbnail="https://www.revistalofficiel.com.br/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F46743%2F1670450883-weeena_007_easy-resize-com.jpg%3Fauto%3Dformat%252Ccompress%26cs%3Dsrgb&w=2048&q=75"
        title="Componete do corpo do site" 
        details="Moda para todas as estações e belezas das passarelas"
        />
      </Container>
    </BodyModelContainer>
  )
}

export default BodyModel;