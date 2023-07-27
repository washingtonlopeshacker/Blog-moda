import { Container, KidsContainer, ContainerCards, ContainerCards1, ContainerCards2 } from "./kids-style";
import { useAppContext } from "../../context/openMenu";
import Header from "../../components/header/header";
import Menu from "../../components/menu/menu";
import CardShortVideo from "../../components/cards-shorts-videos/card-short-video";
import SuperCards from "../../components/super-card/super-card";
import ModaJovens from "../../pages/subscribe/modelos-jovens";
import VideoSearchCards from "../../components/videosSearchCards/video-search-cards";
import TextoCards from "../../components/textcard/text-card";

function Kids() {

  const { openMenu } = useAppContext();

  return (
    <KidsContainer>
      <Header />
      <ModaJovens/>
      <Menu />
      <ContainerCards2 >
      <TextoCards 
        description= " A Historia da Moda Infantil"
        thumbnail="https://cdn.eutotal.com/imagens/design-sem-nome-1-30-cke.jpg"
        title=" Ou seja, os registros que temos da história da roupa infantil entre o século XVI e XVIII correspondem às famílias nobres e da alta burguesia, os únicos que podiam pagar por um retrato da família. Ainda assim, esse estilo de roupa continuava sendo o padrão para os mais pequenos. Por exemplo, por meio de pinturas podemos ver como as crianças de famílias abastadas se vestiam. Afinal, não havia fotos e eram poucos os que podiam pagar por um retrato de família. " 
        details=" Por volta dos 5 anos de idade, quando eram um pouco mais crescidas, as crianças passavam a usar um vestido mais curto com uma espécie de calças. As pantalletes eram calças mais soltas à altura dos tornozelos que, sendo unissex, eram então usadas por baixo dos vestidos tanto pelos meninos como pelas meninas. Todavia, o estilo de roupa para os bebês continuava a ser unissex. Eram basicamente vestido mais longos, com tecidos em cores claras, babados e bordados, muita vezes com um gorro na cabeça a combinar."
        channelImage= "https://www.fenin.com.br/wp-content/uploads/2022/03/FENIN-Fashion-Ideas-eBook-Top-Trends-Inverno-2023-567-px-%C3%97-266-px-768-px-%C3%97-360-px-1.png"
        channelName= "Atualmente existem tantas opções dentro da moda para crianças que fica difícil escolher qual o modelo mais bonito. Entretanto, essa não foi a realidade do setor até pelo menos meados do século XX. Assim, veja a história da roupa infantil e conheça a evolução dos trajes de meninos e meninas até o final do século XIX.y"
        
        />
      </ContainerCards2 >
      <Container openMenu={openMenu}>
      <CardShortVideo 
        thumbnail="https://img.elo7.com.br/product/main/332E09A/vestido-passeio-algodao-estampa-sereia-moda-infantil-tendencia-moda-feminina-2021.jpg"
        title="Moda No Brasil" 
        details="Moda para todas as estações e belezas das passarelas"
        />
      </Container>

      <ContainerCards openMenu={openMenu} >
      <VideoSearchCards
        thumbnail="https://cdn.eutotal.com/imagens/design-sem-nome-1-30-cke.jpg"
        title="O estilos para o Inverno podem surpriender! impressionante as possibilidades de estilos para essa estação fria. " 
        details="Momentos para abulsar nas cores para inovar os estilos coloridos"
        channelImage= "https://www.fenin.com.br/wp-content/uploads/2022/03/FENIN-Fashion-Ideas-eBook-Top-Trends-Inverno-2023-567-px-%C3%97-266-px-768-px-%C3%97-360-px-1.png"
        channelName= "Looks para o inverno, Europa e Sul do Brasil usando mesms estilos"
        description= "Moda na Inverno!, cai a temperatura e o estilo aumenta, um novo coneito para se proteger nesse frio sem perder a pose!"
        />
      </ContainerCards>
      <ContainerCards1 openMenu={openMenu}>
      <SuperCards 
        thumbnail="https://www.sansil.com.br/wp-content/uploads/2022/07/Blog1_destacada.jpg"
        title="A moda-Fashion no Inverno !" 
        details="Momentos para sedivertir na moda infantíl!"
        channelImage= "https://cdn.awsli.com.br/600x1000/1285/1285039/produto/98603998/8f82ee92ba.jpg"
        channelName= "O frio pode vestir bem! Sempre na medida certa para cada estilo!"
        description= "Moda no Inverno!, um novo coneito para estilos mais fechados!"
        />
      </ContainerCards1 >
      
    </KidsContainer>
  )
}

export default Kids;