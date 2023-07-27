import {Container, Container1, HomeContainer, MainContainer,} from "./home-styles";
import CardShortVideo from "../../components/cards-shorts-videos/card-short-video";
import { useAppContext } from "../../context/openMenu";
import { useState, useRef} from "react";
import { useSearchContext } from "../../context/searchContext"
import ShortsSection from "../../components/shorts_section/shorts-section";
import Header from "../../components/header/header";
import Menu from "../../components/menu/menu";
import { useNavigate } from "react-router-dom";
import { useCategoryContext } from "../../context/searchCategories";
import HomeNavigation from "../../components/home-navigate/home-navigate";
import ModaJovens from "../../pages/subscribe/modelos-jovens";
import VideoSearchCards from "../../components/videosSearchCards/video-search-cards";
import HomeFooternav from "../../components/home-footernav/homer-footernav";
const Home: React.FC = () => {

  
  const {setCategoryId} = useCategoryContext()
  const navigate = useNavigate();
  const [clearButton, setClearButton] = useState(false)
  
  const {setSearch} = useSearchContext()
  
  const [inputValue, setInputValue] = useState('')

 

  const inputRef = useRef<HTMLInputElement>(null);


  
  const { openMenu } = useAppContext();

  return (
    <HomeContainer>
      <Header />
      <ModaJovens/>
      <Menu />
      <HomeNavigation/> 
      <Container1>
      <VideoSearchCards
        thumbnail="https://i.pinimg.com/736x/27/1a/fd/271afdd5551a3e6dca7bd6381b86ca41.jpg"
        title="A moda-Fashion no Brasil !" 
        details="Momentos para abulsar nos estilos e Representar cada estação!"
        channelImage= "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/0015/6389/brand.gif?itok=96HthW-T"
        channelName= "Looks para vestir o Brasil e o mundo!"
        description= "Moda Praia Verão!, Moda inverno, Espaço Kids, Novos Conceitos de moda para proporcionar melhores  escolhas ao vestir ou  criar!"
        />
      </Container1>
      <MainContainer openMenu={openMenu}>
      
        <Container openMenu={openMenu}>
        <CardShortVideo 
        thumbnail="https://pefakmodas.com.br/wp-content/uploads/2021/12/275c4111bda5f455cd339d1c3d2cdb35-392x480.jpg"
        title="Conceitos de Moda para cada estado do Brasil " 
        details="Designers com estilos Para todos os gostos. Eventos Fashion week"
        />
        <CardShortVideo 
        thumbnail="https://i.pinimg.com/originals/1e/b9/d4/1eb9d49aa5a436028d459babbe793d13.png"
        title="Moda No Brasil" 
        details="Moda para todas as estações e belezas das passarelas"
        />
        <CardShortVideo 
        thumbnail="https://i.pinimg.com/originals/57/e1/c7/57e1c74c76fc54809fb6fe9ccfcb6217.jpg"
        title="Moda no Brasil e suas Peculiaridades..." 
        details="Comidas tipicas Brasileiras afrodiziacas, alimentam a mente dos designers para novos estilos picantes e senssuais"
        />
        <CardShortVideo 
        thumbnail="https://ginnolarry.com.br/wp-content/uploads/2022/11/bc9761f7-3453-486f-bec1-6bf82b46596a.jpg"
        title="MOMENTO FOFURA!😍 Babys!❤️🖤 #Estyle Modelos e Lukes, #Esportes -futebol dnça, Natação # Times" 
        details="Espaço Kids para todos os estilos em moda infantil"
        />
        </Container>
      <ShortsSection />
      </MainContainer>
      <HomeFooternav/>
      <ModaJovens/>
    </HomeContainer> 
     
  )
}

export default Home;
                         


       
        

        
        

            


