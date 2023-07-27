import CardShortVideo from "../cards-shorts-videos/card-short-video";
import { Container,  MainContainer, ShortsLogo } from "./shorts-section-style";
import LogoShorts from '../../assets/logo-shorts.png';
import { useAppContext } from "../../context/openMenu";

function ShortsSection() {

  const { openMenu } = useAppContext();

  return (
    <MainContainer openMenu={openMenu}>
      <ShortsLogo alt="logo Shorts" src={LogoShorts} />
      
      <Container openMenu={openMenu}>
        
        <CardShortVideo 
        thumbnail="https://cdn.shopify.com/s/files/1/0127/1739/1931/files/tendencias-moda-verao.webp?v=1663953887"
        title="A moda do Verão!" 
        details="Momentos tropicalinete para inovar os estilos mais leves"
        />
        <CardShortVideo 
        thumbnail="https://moda20.com.br/wp-content/uploads/2021/01/e5231a7fcb25614afae1f38e14e8a664.jpg"
        title="Moda Primavera" 
        details="As flores perfumam o ar, inspirando impressionantes estilos  na primavera."
        />
        <CardShortVideo 
        thumbnail="https://i.pinimg.com/736x/36/f6/61/36f661d587092bfe0d4252c322144dbd.jpg"
        title="Moda Outono" 
        details="as folhas caem, a moda se renova"
        />
        <CardShortVideo 
        thumbnail="https://static.stealthelook.com.br/wp-content/uploads/2022/05/looks-de-inverno-roupas-para-o-frio-dicas-stl-amaka-20220518205442.png"
        title="Moda Inverno..." 
        details="Estilos diferenciados para os Momentos frios, más sem perder o Brilho! "
        />
        
      </Container>
    </MainContainer>
  )
}

export default ShortsSection;