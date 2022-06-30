import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import './App.css';
import { Home, Login, Cpu, Mac, Memory } from "./pages/indexPages"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/cpu" element = {<Cpu/>} />
        <Route path="/memory" element={<Memory />} />
        <Route path="/mac" element={<Mac />} />
        {/* <Route path="*" element={<Navigate to={user ? "/" : "/login"} />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;