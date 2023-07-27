
import { 
    ButtonContainer, 
    ButtonIcon, 
    DropDownMenu,
    DropDownMenuContent,
    LogOutButton,
    UserInfoContainer,
    UserName,
    DropDowDivider,
    Container, 
    MenuItem,
   
} from "./Drop-daw-style";

import { useNavigate } from "react-router-dom";
import KidsIcon from '../../assets/login-icon.png';
import Primavera from '../../assets/estrategias-moda.jpg';
import Conceitos from '../../assets/logo-shorts.png';
import Outono from '../../assets/click -fachion.webp';
import HomeIcon from '../../assets/botao-de-inicio.png';
import Inverno from '../../assets/desenho-roupas.png';
import Verão from '../../assets/vestido-mondriam.jpg';
import { useContext,} from "react";
import { UserContext } from "../../context/userContext";
  
const DropDaw = () => { 
const items= [
    {name: 'PRIMAVERA', link: '/primavera', url: Primavera},
    {name: 'OUTONO', link:'/outono', url: Outono},
    {name: 'VERÃO', link:'/verao', url: Verão },
    {name: 'INVERNO', link:'/inverno', url: Inverno },
    
]

    const { user, logOut, openDropDownMenu, setOpenDropDownMenu} = useContext(UserContext);
    const navigate = useNavigate();
  
    const handleDropDownMenu = () => {
        setOpenDropDownMenu(!openDropDownMenu)
      }

      const goOut = () => {
        logOut()
        handleDropDownMenu()
        navigate('/')
      }

      const goShorts = () => {
        handleDropDownMenu()
        navigate('/kids')
      }
    
      const goYourVideos = () => {
        navigate('/moda-joven')
        handleDropDownMenu()
      } 
  return (
<DropDownMenu openDropDownMenu={openDropDownMenu}>
  
<UserInfoContainer>
  <ButtonContainer 
    margin='0 0 0 10px' 
    onClick={handleDropDownMenu} 
    style={{backgroundColor: '#53289c'}}
    >
    <ButtonIcon alt="ícone logout" src={KidsIcon} />
 
    </ButtonContainer>
    <UserName>FASHION MODA</UserName>
    </UserInfoContainer>
  <DropDowDivider/>
    <DropDownMenuContent onClick={goOut}>
      <ButtonIcon alt="ícone logout" src={HomeIcon} />
      <LogOutButton>
        HOME
      </LogOutButton>
    </DropDownMenuContent>

  <DropDownMenuContent onClick={goYourVideos}>
    <ButtonIcon alt="ícone logout" src={Conceitos} />
    <LogOutButton>
      CONCEITOS
    </LogOutButton>
  </DropDownMenuContent>

  <DropDownMenuContent onClick={goShorts}>
    <ButtonIcon alt="ícone logout" src={KidsIcon} />
    <LogOutButton>
      ESPAÇO KIDS
    </LogOutButton>
  </DropDownMenuContent>

  <DropDowDivider/>
    <Container >
          {items.map((item)=>(

          <MenuItem onClick={() => navigate(item.link)}>
              <ButtonIcon alt=""src={  (item.url)}/>
              <span>{item.name}</span>
          </MenuItem>
          ))}
      </Container>

  </DropDownMenu>
  )
 }

export default DropDaw;