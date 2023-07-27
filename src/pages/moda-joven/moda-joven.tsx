import { Container, ModaJovenContainer, ContainerCards, ContainerCards1, ContainerCards2, ContainerCards3 } from "./modajoven-styles";
import { useAppContext } from "../../context/openMenu";
import Header from "../../components/header/header";
import Menu from "../../components/menu/menu";
import CardShortVideo from "../../components/cards-shorts-videos/card-short-video";
import CardsModel from "../../components/cards-model/cards-model";
import ModaJovens from "../subscribe/modelos-jovens"
import VideoSearchCards from "../../components/videosSearchCards/video-search-cards";
import TextoCards from "../../components/textcard/text-card";

function ModaJoven() {

  const { openMenu } = useAppContext();

  return (
    <ModaJovenContainer>
      <Header/>
      <ModaJovens/>
      <Menu/>
      <Container openMenu={openMenu}>
      <CardShortVideo 
        thumbnail="https://colegionext.com.br/wp-content/uploads/2017/11/Imagem-Oficial-Blog-1568x1047.jpeg"
        title="Moda Jovem  Verão" 
        details="Com as estações dominando temos que saber as opções paraos novos looks Moda verão no Brasil!"
        />
        <CardShortVideo 
        thumbnail="https://i.pinimg.com/236x/b1/b7/b2/b1b7b22dba287a0234f592fc91858979.jpg"
        title="Moda Jovem Praia" 
        details="Moda para Todo Litoral Brasileiro, na Pegada dessa nova Geração, vamos aproveitar as praias sem perder o estilo."
        />
        <CardShortVideo 
        thumbnail="https://i.customizando.net/wp-content/uploads/2022/09/como-usar-roupa-de-academia-em-looks-do-dia-a-dia-moda-feminina-customizando-4.jpg"
        title="Moda Jovem Inverno" 
        details="Moda no Inverno de Manaus"
        />
        <CardShortVideo 
        thumbnail="https://imgsapp2.correiobraziliense.com.br/app/noticia_127983242361/2014/04/10/422432/20140410113904684515u.jpg"
        title="Passarelas" 
        details="Moda! estilos dessa  Geração, nas passarelas!"
        />
      </Container>

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
      
      <ContainerCards>
        <CardsModel
        thumbnail="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIhKLixKhU9cOcjk6KuWh5TbGSEzwwad2IPQ&usqp=CAU"
        title="Moda no Amazonas Juventude com roupas biodegradáveis" 
        details=" Eventos para ensinar como inovar criações que não afetam o planeta."
        />
      
        <CardsModel
        thumbnail="https://veja.abril.com.br/wp-content/uploads/2023/02/GettyImages-1246359138.jpg.jpg?quality=70&strip=info"
        title="Moda Jovem inova Guardaroupa, rapaziada desenhando as inovações para esta estção!" 
        details="Prepare seu a imaginação, vamos criar nosso estilo nesse Verão"
        />


        <CardsModel
        thumbnail="https://moda20.com.br/wp-content/uploads/2019/02/fcef62b4c2903d8e677a56b48f983550.jpg"
        title="Moda No Brasil, um novo coneito em se vestir em um clima totalmente tropical. Quente é o Verão no Brasil" 
        details="Moda para todas as estações e as belezas que envolvem os melhores estilos das passarelas"
        />
      </ContainerCards>

      <ContainerCards1>
        <VideoSearchCards
        thumbnail="https://imagensblogs.nyc3.digitaloceanspaces.com/modafeminina/2023/06/05162429/Fotos-homem-pratico-moda-verao-praia.webp"
        title="A moda do Verão no Brasil  e no Mundo!" 
        details="Momentos tropicalinete para inovar os estilos mais leves"
        channelImage= "https://salaovirtual.org/wp-content/uploads/2023/05/Fotos-acessorios-moda-verao.webp"
        channelName= "Moda para Verão"
        description= "Moda! Quam faz e você!, sempre existe um novo coneito em se vestir bem! Façaseu estilo para esse verão"
        />

        <VideoSearchCards
        thumbnail="https://i0.wp.com/blogdamaricalegari.com.br/wp-content/uploads/2023/02/image-3-33.jpg?resize=480%2C926&ssl=1"
        title="A moda do Inverno para países com climas e culturas  diferentes!" 
        details="Momentos tropicalinete para inovar os estilos mais leves"
        channelImage= "https://m.media-amazon.com/images/I/41nXAmk96cL._AC_.jpg"
        channelName= "Moda para Inverno"
        description= "Moda No Brasil, um novo coneito em se vestir bem"
        />

        <VideoSearchCards
        thumbnail="https://jornalmare.com.br/wp-content/uploads/2021/10/foto-v2.jpg"
        title="A moda na Primavera no coração do Mundo!" 
        details="Momentos para abulsar nas cores para inovar os estilos coloridos"
        channelImage= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe-D7KQAPVBP7FTjZUUMW6UlOOKARK-4Lw4A&usqp=CAU"
        channelName= "Moda para primavera"
        description= "Moda sem cores na primavera?, sempre O aroma e as coresdas flores vão inspiras as  melhores criações!"
        />

        <VideoSearchCards
        thumbnail="https://www.elhombre.com.br/wp-content/uploads/2017/11/bermuda-masculina-600x337.jpg"
        title="A moda no Outono também manifesta inspirçaõ  para as melhores designers de moda!" 
        details="Momentos para inovar os estilos com cores mais leves  "
        channelImage= "https://d2qp0m2gxa56ih.cloudfront.net/cloudimage/productimage/61816e0e-img-20220915-131743.jpg?w=600&h=600&mode=crop&scale=both"
        channelName= "Moda para Outono"
        description= "Moda Outono, quando as folhas caeem a moda se levanta para sempre  se vestir bem"
        />
      </ContainerCards1>

      <ContainerCards2>
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
        thumbnail="https://escoladeestilo.com.br/wp-content/uploads/2021/01/inverno-1.jpg"
        title="Moda Inverno..." 
        details="tudo para os Momentos frios, más sem perder o Estilo! "
        />
      </ContainerCards2>
    </ModaJovenContainer>
  )
}

export default ModaJoven;