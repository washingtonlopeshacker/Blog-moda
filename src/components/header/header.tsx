import { 
    ButtonContainer, 
    ButtonIcon, 
    Container, 
    Logo, 
    LogoContainer,
    HeaderButtons, 
    LinkLogo,
    LoginContainer,
    LoginButton,
    LoginIcon,
} from "./header-style";

  import Menu from '../../assets/menu.png'
  import Logoyt from '../../assets/logoyoutube.png'
  
  import LoginIconPng from '../../assets/login-icon.png'
  import { useAppContext } from "../../context/openMenu";
  import { useNavigate } from "react-router-dom";
  import { useContext} from "react";
  import { UserContext } from "../../context/userContext";
  import DropDawn from "../dropDaw/Drop-daw";
  import { useCategoryContext } from "../../context/searchCategories";
  
  import EstrelaIcon from '../../assets/estrela.png';
  
  const Header: React.FC = () => {
  
    const { openMenu, setOpenMenu } = useAppContext();
  
    
  
    const navigate = useNavigate();
  
    const handleMenuClick = () => {
      setOpenMenu(!openMenu);
    };
  
    const { login, logOut, user, openDropDownMenu, setOpenDropDownMenu } = useContext(UserContext)
  
    
  
    const handleDropDownMenu = () => {
      setOpenDropDownMenu(!openDropDownMenu)
    }
    
    const {setCategoryId} = useCategoryContext()
  
  
    return (
      <Container>
  
        <LogoContainer>
  
          <ButtonContainer onClick={handleMenuClick} margin='0 10px 0 0'>
            <ButtonIcon alt="logo menu" src={Menu}/>
          </ButtonContainer>
  
          <LinkLogo to='/' onClick={() => setCategoryId('0')}>
            <Logo alt="logo youtube" src={Logoyt} />
          </LinkLogo>
  
        </LogoContainer>
  
      <HeaderButtons>

          <ButtonContainer margin='0 -40px 0 0' >
          <ButtonIcon alt="logo " src={EstrelaIcon } />
          </ButtonContainer>

          <ButtonContainer margin='0 0 0 60px'onClick={handleDropDownMenu}>
          <LoginIcon alt="Login Icon" src={LoginIconPng} />
          </ButtonContainer>

          <ButtonContainer margin='0 0 0 50px' >
          <Logo alt="logo " src={Logoyt} />
          </ButtonContainer>

          <ButtonContainer margin='0 0 0 60px' onClick={handleDropDownMenu} >
          <LoginIcon alt="Login Icon" src={LoginIconPng} />
          </ButtonContainer>

          <ButtonContainer margin='0 0 0 20px' >
          <ButtonIcon alt="logo " src={EstrelaIcon } />
          </ButtonContainer>
          
          <DropDawn/>

      </HeaderButtons>
      <LoginContainer onClick={() => ('/login')}>
          <LoginButton>
            <LoginIcon alt="Login Icon" src={LoginIconPng} />
            
          </LoginButton>
        </LoginContainer>
      </Container>
    )
  }
  
  export default Header;