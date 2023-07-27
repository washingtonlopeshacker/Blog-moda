
import {ModaHeader,  LogoModa, Link, Texto, LogoModel} from "./modelosjovens-style";

import LoginIconPng from '../../assets/login-icon.png';



function ModaJovens(){
    
    return (    
      
   
      <ModaHeader>
      <LogoModa alt="Login Icon" src={LoginIconPng}/>
        <Texto> Moda Fashion.com </Texto>
          <Link to='/'>HOME</Link>
          <Link  to= '/primavera'>PRIMAVERA</Link>
          <Link to= '/outono'>OUTONO</Link>
          <Link to='/verao'>VERÃO</Link>
          <Link to='/inverno'>INVERNO</Link>
          
        <LogoModel alt="Login Icon" src ={LoginIconPng}/> 
      </ModaHeader> 
    
       
 )
}
export default ModaJovens;
            
            
         
            