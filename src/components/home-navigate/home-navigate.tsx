import { Container, HomeContainer,
HeroContainer, 
 H1,
 } from "./homenavigate-style";


import { useAppContext } from "../../context/openMenu";



function HomeNavigation() {

  const { openMenu } = useAppContext();
  
  return (
    <HomeContainer>
    <Container openMenu={openMenu}>

    <HeroContainer >
    <H1>Blog de Apresentação da Moda em Geral no Brasil e no exterior</H1>

    </HeroContainer>
    </Container>
    </HomeContainer>
  )
}

export default HomeNavigation;
      
      