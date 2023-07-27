import { useAppContext } from "../../../context/openMenu";
import { 
  MenuItem,
  MenuItemDescription,
  ButtonIcon,
  MenuContainer,
  MenuTitles,
  Link
} from "../menu-styles";

import Fashion from '../../../assets/BLOG-Header-Marketplace.webp'
import KidsIcon from '../../../assets/login-icon.png'
import News from '../../../assets/news.png'
import Verão from '../../../assets/vestido-mondriam.jpg'
import Outono from '../../../assets/click -fachion.webp'
import Model from '../../../assets/click -fachion.webp'
import Primavera from '../../../assets/estrategias-moda.jpg'
import Inverno from '../../../assets/desenho-roupas.png';


const items = [
  {icon: Fashion, description: 'MODA FASHION', link: '/'},
  {icon: KidsIcon, description: 'MODA KIDS',  link: '/kids'},
  {icon: Model, description: 'CONCEITOS MODA' , link: '/moda-joven'},
  {icon: Verão, description: 'VERÃO ', link: '/verao'},
  {icon: Primavera, description: 'PRIMAVERA', link: '/primavera'},
  {icon: Outono, description: 'OUTONO', link: '/outono'},
  {icon: Inverno, description: 'INVERNO', link: '/inverno'},
  {icon: News, description: 'NOTICIAS ', link: '/search'},
]

function ExplorerMenu() {

  const { openMenu } = useAppContext();

  return (
    <MenuContainer>
      <MenuTitles>
        <span>Explorar</span>
      </MenuTitles>
      {items.map((item, index) => (
        <Link key={index} to={item.link}>
        <MenuItem key={index} openMenu={openMenu}>
          <ButtonIcon alt="Ícone" src={item.icon}/>
          <MenuItemDescription openMenu={openMenu}>{item.description}</MenuItemDescription>
        </MenuItem>
         </Link>
      ))}
    </MenuContainer>
  )
}

export default ExplorerMenu;