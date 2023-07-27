import { Container, StateFashionContainer } from "./statefashin-styles";
import { useAppContext } from "../../context/openMenu";
import Header from "../../components/header/header";
import Menu from "../../components/menu/menu";
import CardShortVideo from "../../components/cards-shorts-videos/card-short-video";
function Shorts() {

  const { openMenu } = useAppContext();

  return (
    <StateFashionContainer>
      <Header />
      <Menu />
      <Container openMenu={openMenu}>
      <CardShortVideo 
        thumbnail="https://www.revistalofficiel.com.br/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F46743%2F1670450883-weeena_007_easy-resize-com.jpg%3Fauto%3Dformat%252Ccompress%26cs%3Dsrgb&w=2048&q=75"
        title="'MODA ESTADUAL'             Aplicacões de estilos na moda conforme simbolizando culturas e estaçoes com os melhores e designers no Estado do Norte" 
        details="Moda para todas as estações, conforme o estado do amazonas só existem duas estações"
        />
      </Container>
    </StateFashionContainer>
  )
}

export default Shorts;