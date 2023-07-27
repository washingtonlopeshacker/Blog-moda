import { useAppContext } from "../../context/openMenu";
import { Container, Divider } from "./menu-styles";
import HomeMenu from "./containers/home-menu";
import ExplorerMenu from "./containers/explorer-menu";



const Menu: React.FC = () => {

  const { openMenu } = useAppContext();

  
  const menuItems = [
    { component: HomeMenu },
    { component: ExplorerMenu },
   
  ];
  
  const shouldRenderAllItems = openMenu;
  const shouldRenderDivider = menuItems.length > 1 && shouldRenderAllItems;
  
  return (
    <Container openMenu={openMenu}>
      {menuItems.map((menuItem, index) => (
        <div key={index} style={{ width: "100%" }}>
          {(shouldRenderAllItems || index === 0) && (
            <>
              {<menuItem.component />}
              {shouldRenderDivider && index !== menuItems.length - 1 && <Divider />}
            </>
          )}
        </div>
      ))}
    </Container>
  )
}

export default Menu;