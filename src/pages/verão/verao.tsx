
import { Container, VeraoContainer, ContainerCards, ContainerCards3 } from "./verao-style";
import { useAppContext } from "../../context/openMenu";
import Header from "../../components/header/header";
import Menu from "../../components/menu/menu";
import VideoSearchCards from "../../components/videosSearchCards/video-search-cards";
import ModaJovens from "../../pages/subscribe/modelos-jovens";
import CardsModel from "../../components/cards-model/cards-model";
import SuperCards  from "../../components/super-card/super-card";
import HomeFooternav  from "../../components/home-footernav/homer-footernav";
import TextoCards   from "../../components/textcard/text-card";

function Verao() {

  const { openMenu } = useAppContext();

  return (
    <VeraoContainer>
      <Header />
      <ModaJovens/>
      <Menu />
      <ContainerCards >
      <SuperCards 
        thumbnail="https://imgsapp.revistaencontro.com.br/app/noticia_152466458717/2022/12/30/167895/moda-verao-verao-23-verao-2023-tendencia-eduardo-amarante-modelos-vestidos-biquini-roupas-revista-encontro-amar-de-amarante-foto-1_1_98346.jpg"
        title="A moda-Fashion no Verão !" 
        details="Momentos para inovar os estilos e aproveitar o sol!"
        channelImage= "https://images.tcdn.com.br/img/img_prod/1089144/90_conjunto_biquini_feminino_luiza_3_pcs_moda_verao_2023_2213_2_c11cb431384e291d402d14ce2b2d0d02.jpg"
        channelName= "O Sol na medida certa para cada estilo!"
        description= "Moda no Verão!, O Calor do Sol inspirar as melhores criações, um novo coneito para estilos nesse verão!"
        />
      </ContainerCards >

      <ContainerCards3 >
      <TextoCards 
        description= " A Historia da Moda Infantil"
        thumbnail="https://cdn.eutotal.com/imagens/design-sem-nome-1-30-cke.jpg"
        title=" Ou seja, os registros que temos da história da roupa infantil entre o século XVI e XVIII correspondem às famílias nobres e da alta burguesia, os únicos que podiam pagar por um retrato da família. Ainda assim, esse estilo de roupa continuava sendo o padrão para os mais pequenos. Por exemplo, por meio de pinturas podemos ver como as crianças de famílias abastadas se vestiam. Afinal, não havia fotos e eram poucos os que podiam pagar por um retrato de família. " 
        details=" Por volta dos 5 anos de idade, quando eram um pouco mais crescidas, as crianças passavam a usar um vestido mais curto com uma espécie de calças. As pantalletes eram calças mais soltas à altura dos tornozelos que, sendo unissex, eram então usadas por baixo dos vestidos tanto pelos meninos como pelas meninas. Todavia, o estilo de roupa para os bebês continuava a ser unissex. Eram basicamente vestido mais longos, com tecidos em cores claras, babados e bordados, muita vezes com um gorro na cabeça a combinar."
        channelImage= "https://www.fenin.com.br/wp-content/uploads/2022/03/FENIN-Fashion-Ideas-eBook-Top-Trends-Inverno-2023-567-px-%C3%97-266-px-768-px-%C3%97-360-px-1.png"
        channelName= "Atualmente existem tantas opções dentro da moda para crianças que fica difícil escolher qual o modelo mais bonito. Entretanto, essa não foi a realidade do setor até pelo menos meados do século XX. Assim, veja a história da roupa infantil e conheça a evolução dos trajes de meninos e meninas até o final do século XIX.y"
        
        />
      </ContainerCards3>
      
      <Container openMenu={openMenu}>
      <VideoSearchCards
        thumbnail="https://www.fenin.com.br/wp-content/uploads/2021/09/Ganni.png"
        title="A moda-Fashion no Verão  !" 
        details="Momentos para abulsar nas curvas e inovar os estilos no verão"
        channelImage= "https://salaovirtual.org/wp-content/uploads/2023/05/Fotos-acessorios-moda-verao.webp"
        channelName= "Looks para o Verão"
        description= "Moda Praia Verão!, o Sol no seu melhor brilho para criações que só o verão pode proporcionar!"
        />
      </Container>
      <ContainerCards>
        <CardsModel 
        thumbnail="https://salaovirtual.org/wp-content/uploads/2023/05/Fotos-acessorios-moda-verao.webp"
        title=" Verão no Brasil, integrar o calor com estilo lançando looks leves e confortaveis" 
        details=" Eventos para ensinar como inovar seu Guarda roupa."
        />
      
        <CardsModel
        thumbnail="https://dicasdelas.dci.com.br/wp-content/uploads/2022/12/Moda-verao-2023-8-750x430.jpg"
        title=" Verão Moda Praia,  Prai, Piscina o importante é não perder a pose!" 
        details="Prepare sua a imaginação, vamos criar nosso estilo novo nesse verão!"
        />
      </ContainerCards>
      <HomeFooternav/>
      <ModaJovens/>
    </VeraoContainer>
  )
}

export default Verao;