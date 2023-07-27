import { Container, PrimaveraContainer, ContainerCards, ContainerSuperCards,  ContainerCards3  } from "./primavera-style";
import { useAppContext } from "../../context/openMenu";
import Header from "../../components/header/header";
import Menu from "../../components/menu/menu";
import VideoSearchCards from "../../components/videosSearchCards/video-search-cards";
import ModaJovens from "../../pages/subscribe/modelos-jovens";
import CardsModel from "../../components/cards-model/cards-model";
import SuperCards from "../../components/super-card/super-card";
import HomeFooternav  from "../../components/home-footernav/homer-footernav";
import TextoCards  from "../../components/textcard/text-card";

function Primavera() {

  const { openMenu } = useAppContext();

  return (
    <PrimaveraContainer>
      <Header />
      <ModaJovens/>
      <Menu />
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
      <ContainerSuperCards >
      <SuperCards 
        thumbnail="https://1.bp.blogspot.com/-0N3TMVkZ3HM/YUNk4D1IegI/AAAAAAAADSM/WJn3TjUMz9IyPsIvWt4NxKajBeA3PlUMQCLcBGAsYHQ/s1079/tend%25C3%25AAncias%2Bnew%2Byork%2Bfashion%2Bweek%2Bprimavera%2Bverao%2B2022%2B2023%2B%25285%2529.png"
        title="A moda-Fashion na Primavera !" 
        details="Momentos para abusar nas cores e inovar os estilos coloridos"
        channelImage= "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi-Rmr31jqgg0o9wpvX7XkYCB0RArxIkmvzLJYDADjqmBvStQi8bNPLxICiblpgEv2RMoe3MbtLKZ3a55cvKw73_boHeNRaZhC1LwBCKWZqc7XEDCVjYR7ljQwxP9DkYDXIC-155EpR1mVBfj5q-IfA5ojg_Lc86pfOCtvt3_jSRw-aSLp-rch_7Owv/s1500/Tend%C3%AAncias%20Primavera%20Ver%C3%A3o%202023,%20Amanda%20Paggi,%20Kathleen%20Barnes.png"
        channelName= "Looks para primavera"
        description= "Moda na primavera!, as flores vão inspirar as melhores criações artesnalmente. um novo coneito para Estilos na primavera!"
        />
      </ContainerSuperCards >
      <Container openMenu={openMenu}>
      <VideoSearchCards
        thumbnail="https://blog.oscarcalcados.com.br/wp-content/uploads/2017/10/Moda-verao-2018-as-principais-tendencias-7.jpg"
        title="A moda-Fashion na Primavera !" 
        details="Momentos para abulsar nas cores para inovar os estilos coloridos"
        channelImage= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe-D7KQAPVBP7FTjZUUMW6UlOOKARK-4Lw4A&usqp=CAU"
        channelName= "Looks para primavera"
        description= "Moda na primavera!, as flores vão inspirar as melhores criações artesnalmente. um novo coneito para Estilos na primavera!"
        />
      </Container >
      <ContainerCards>
        <CardsModel 
        thumbnail="https://www.jornalcruzeiro.com.br/_midias/jpg/2022/09/30/001___08_tendencias_primavera_verao_2022___2023___moda___blog_de_moda___go_fashion___julia_rolim-1000926.jpg"
        title="Primavra  no Brasil, diversas posibilidades de integrar natureza e estilo com roupas biodegradáveis" 
        details=" Eventos para ensinar como inovar seu Guarda roupas."
        />
      
        <CardsModel
        thumbnail="https://dicasdelas.dci.com.br/wp-content/uploads/2022/12/Moda-verao-2023-8-750x430.jpg"
        title="Moda PRIMAVERA inova Guardaroupa,   estilos aprimorados para as MAIORES CRIAÇÕES DA PRIMAVERA!" 
        details="Prepare seu a imaginação, vamos criar nosso estilo nesse Primavera"
        />
      </ContainerCards>
      <HomeFooternav/>
      <ModaJovens/>
    </PrimaveraContainer>
  )
}

export default Primavera;