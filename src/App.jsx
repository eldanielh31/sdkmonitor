import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import './App.css';
import { Home, Login, Cpu, Mac, Memory, ShowMac } from "./pages/indexPages"

function App() {
  return (<div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/cpu" element = {<Cpu/>} />
        <Route path="/memory" element={<Memory />} />
        <Route path="/mac" element={<Mac />} />
        <Route path="/showmac/:macaddress" element= {<ShowMac/>}/>
        {/* <Route path="*" element={<Navigate to={user ? "/" : "/login"} />} /> */}
      </Routes>
    </BrowserRouter>
    </div> 
  );
}

export default App;