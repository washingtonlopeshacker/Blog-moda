import { Container, InvernoContainer, ContainerCards } from "./inverno-styles";
import { useAppContext } from "../../context/openMenu";
import Header from "../../components/header/header";
import Menu from "../../components/menu/menu";
import VideoSearchCards from "../../components/videosSearchCards/video-search-cards";
import ModaJovens from "../../pages/subscribe/modelos-jovens";
import CardsModel from "../../components/cards-model/cards-model";
import SuperCards from "../../components/super-card/super-card";
import HomeFooternav from "../../components/home-footernav/homer-footernav";
function Inverno() {

  const { openMenu } = useAppContext();

  return (
    <InvernoContainer>
      <Header />
      <ModaJovens/>
      <Menu />
      <ContainerCards >
      <SuperCards 
        thumbnail="https://inmagazine.ig.com.br/public/assets/img/postagens/post_30979.jpg"
        title="A moda-Fashion no Inverno !" 
        details="Momentos para inovar os estilos e aproveitar o Friozinho gostoso!"
        channelImage= "https://i0.wp.com/blogdamaricalegari.com.br/wp-content/uploads/2023/02/image-3-33.jpg?resize=480%2C926&ssl=1"
        channelName= "O frio pode vestir bem! Sempre na medida certa para cada estilo!"
        description= "Moda no Inverno!, um novo coneito para estilos mais fechados!"
        />
      </ContainerCards >
      <Container openMenu={openMenu}>
      <VideoSearchCards
        thumbnail="https://cdn.eutotal.com/imagens/design-sem-nome-1-30-cke.jpg"
        title="O estilos para o Inverno podem surpriender! impressionante as possibilidades de estilos para essa estação fria. " 
        details="Momentos para abulsar nas cores para inovar os estilos coloridos"
        channelImage= "https://www.fenin.com.br/wp-content/uploads/2022/03/FENIN-Fashion-Ideas-eBook-Top-Trends-Inverno-2023-567-px-%C3%97-266-px-768-px-%C3%97-360-px-1.png"
        channelName= "Looks para o inverno, Europa e Sul do Brasil usando mesms estilos"
        description= "Moda na Inverno!, cai a temperatura e o estilo aumenta, um novo coneito para se proteger nesse frio sem perder a pose!"
        />
      </Container>
      <ContainerCards>
        <CardsModel 
        thumbnail="https://fieroshop.vteximg.com.br/arquivos/ids/168975/foto%20cliente%20usando%20fiero%20fazendo%20boneco%20de%20neve-min.jpg?v=637270661228900000"
        title="Inverno  no Brasil, diversas posibilidades para não perder uma noite fria, usando seu look que mais aquece!" 
        details=" O frio  pede para inovar o Guarda roupa com  looks de inverno."
        />
      
        <CardsModel
        thumbnail="https://s2.glbimg.com/riUz1nSeQLK14nH-URnfIHsNy-Y=/620x466/e.glbimg.com/og/ed/f/original/2017/08/07/pecoas_de_veraao_no_inverno-01.png"
        title="Moda para Inverno,   estilos para o inverno sempre transbordando Charme e elgancia! " 
        details="Prepare-se, o frio está chegando! sua  imaginação pode criar looks com estilos impressionantes!"
        />
      </ContainerCards>
      <HomeFooternav/>
      <ModaJovens/>
    </InvernoContainer>
  )
}

export default Inverno;