import styled from "styled-components";

interface ContainerProps {
  openMenu: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  height: auto;
  background-size: cover;
  background-image: url("https://jornalisas.files.wordpress.com/2015/05/untitled.png");
   box-sizing: border-box;
  
`;

export const HomeContainer = styled.div`
  width: 100%;
`;


export const HeroContainer = styled.div `
    width: 500px;
    height:400px;
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    
   
`;



export const H1 = styled.span`
 color:#808000;
 font-weight: 700;
 font-size:40px
`;  



   
export const Path = styled.path`
  stroke: #fff;
  fill: transparent;
  stroke-width: 1px;
  animation: arrow 2s infinite;
  -webkit-animation: Arrows 2s infinite;



@keyframes Arrows
{
0% {opacity: 0;}
40% {opacity: 1;}
80% {opacity: 0;}
100% {opacity: 0;}
}

@-webkit-keyframes Arrows
{
0% {opacity: 0;}    
40% {opacity: 1;}    
80% {opacity: 0;}    
100% {opacity: 0;}    
}     
`;

export const A1 = styled.path`
  animation-delay: -1s;
  -webkit-animation-delay: -1s;
`;

export const A2 = styled.path`
  animation-delay: -0.5s;
  -webkit-animation-delay: -0.5s;
`;

export const A3 = styled.path`
  animation-delay: 0s;
  -webkit-animation-delay: 0s;
`;


 export const Span = styled.div`
  font-family: 'Roboto';
  font-size: 16px;
  color: white;
  display: flex;
  margin-right: 80%;
  margin-bottom: 50px;
`;
   



