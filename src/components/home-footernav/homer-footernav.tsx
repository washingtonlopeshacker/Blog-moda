import { Container, HomeContainer,
    HeroContainer} from "./homer-footer-styles";
    
    
    import { useAppContext } from "../../context/openMenu";
    
    
    
    function HomeFooternav() {
    
      const { openMenu } = useAppContext();
      
      return (
        <HomeContainer>
        <Container openMenu={openMenu}>
    
        <HeroContainer >
        
    
        </HeroContainer>
        </Container>
        </HomeContainer>
      )
    }
    
    export default HomeFooternav;
          
          