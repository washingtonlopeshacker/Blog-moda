import { useAppContext } from "../../../context/openMenu";
import { 
  MenuItem,
  MenuItemDescription,
  ButtonIcon,
  MenuContainer,
  Link 
} from "../menu-styles";
import HomeIcon from '../../../assets/botao-de-inicio.png'
import Popular from '../../../assets/fogo.png'
import LibraryIcon from '../../../assets/biblioteca.png'
import SubscribeIcon from '../../../assets/subscribe.png'

const items = [
  {icon: HomeIcon, description: 'HOME', link: '/'},
  {icon: Popular, description: 'STATE', link: '/search'},
  {icon: SubscribeIcon, description: 'NATIONAL', link: '/moda-joven'},
  {icon: LibraryIcon, description: 'WORLD', link: '/kids'}
]

function HomeMenu() {

  const { openMenu } = useAppContext();

  return (
    <MenuContainer>
      {items.map((item, index) => (
        <Link key={index} to={item.link}>
          <MenuItem openMenu={openMenu}>
            <ButtonIcon alt="Ícone" src={item.icon}/>
            <MenuItemDescription openMenu={openMenu}>{item.description}</MenuItemDescription>
          </MenuItem>
        </Link>
      ))}
    </MenuContainer>
  )
}

export default HomeMenu;