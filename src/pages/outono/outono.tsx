import { Container, OutonoContainer, ContainerCards, ContainerSuperCards, ContainerCards3  } from "./outono-styles";
import { useAppContext } from "../../context/openMenu";
import Header from "../../components/header/header";
import Menu from "../../components/menu/menu";
import VideoSearchCards from "../../components/videosSearchCards/video-search-cards";
import ModaJovens from "../../pages/subscribe/modelos-jovens";
import CardsModel from "../../components/cards-model/cards-model";
import SuperCards from "../../components/super-card/super-card";
import HomeFooternav  from "../../components/home-footernav/homer-footernav";
import TextoCards   from "../../components/textcard/text-card";

function Outono() {

  const { openMenu } = useAppContext();

  return (
    <OutonoContainer>
      <Header />
      <ModaJovens/>
      <Menu />
      <ContainerSuperCards >
      <SuperCards 
        thumbnail="https://media.rmix.com.br/2023/04/d79c1a0f-coluna-tina-cargo.png"
        title="A moda-Fashion no Outono !" 
        details="Momentos para abusar nas cores claras e inovar com glamour"
        channelImage= "https://images.pexels.com/photos/12036830/pexels-photo-12036830.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
        channelName= "Oque temos de Looks para Outono?"
        description= "Moda Outono, as folhas resecadas trazem as cores para essa estação!"
        />
      </ContainerSuperCards >
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
        thumbnail="https://moda20.com.br/wp-content/uploads/2022/03/pexels-photo-6070408.jpeg"
        title="A moda-Fashion na Primavera !" 
        details="Momentos para abulsar nas cores para inovar os estilos coloridos"
        channelImage= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe-D7KQAPVBP7FTjZUUMW6UlOOKARK-4Lw4A&usqp=CAU"
        channelName= "Looks para primavera"
        description= "Moda na primavera!, as flores vão inspirar as melhores criações artesnalmente. um novo coneito para Estilos na primavera!"
        />
      </Container >
      <ContainerCards>
        <CardsModel 
        thumbnail="https://blog.e-lens.com.br/wp-content/uploads/2018/03/shutterstock_451824382.jpg"
        title="Primavra  no Brasil, diversas posibilidades de integrar natureza e estilo com roupas biodegradáveis" 
        details=" Eventos para ensinar como inovar seu Guarda roupas."
        />
      
        <CardsModel
        thumbnail="https://i.pinimg.com/originals/43/c8/31/43c831b02503f7a8e41c6830b3b8975e.jpg"
        title="Moda PRIMAVERA inova Guardaroupa,   estilos aprimorados para as MAIORES CRIAÇÕES DA PRIMAVERA!" 
        details="Prepare seu a imaginação, vamos criar nosso estilo nesse Primavera"
        />
      </ContainerCards>
      <HomeFooternav/>
      <ModaJovens/>
    </OutonoContainer>
  )
}

export default Outono;