import './App-style'
import { MainContainer } from "./App-style";
import Home from "./pages/home/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Kids from "./pages/kids/kids";
import State from "./pages/state-fashion/state-fashion";
import Primavera from "./pages/primavera/primavera";
import { UserStorage } from "./context/userContext";
import Login from "./pages/login/login";
import YourVideos from "./pages/yourVideos/your-videos";
import SearchPage from "./pages/search/search";
import SignUp from './pages/sign-up/sign-up';
import ModaJoven from './pages/moda-joven/moda-joven'; 
import Verao from './pages/verão/verao';
import Inverno from './pages/inverno/inverno';
import Outono from "./pages/outono/outono"

function App() {

 

  return (
    <BrowserRouter>
      <UserStorage>
        <div className="App">
          <MainContainer>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/kids" element={<Kids/>} />
              <Route path="/stateFashion" element={<State />} />
              <Route path="/primavera" element={<Primavera />} />
              <Route path="/outono" element={<Outono />} />
              <Route path="/inverno" element={<Inverno />} />
              <Route path="/verao" element={<Verao />} />
              <Route path="/login" element={<Login />} />
              <Route path="/yourvideos" element={<YourVideos />} />
              <Route path="/search" element={<SearchPage/>} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/moda-joven" element={<ModaJoven />} />
            </Routes>
          </MainContainer>
        </div>
      </UserStorage>
    </BrowserRouter>
  );
}

export default App;

  
         
            