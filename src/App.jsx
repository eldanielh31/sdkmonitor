import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import './App.css';
import { Home, Login, Cpu, Mac, Memory, ShowMac } from "./pages/indexPages"
import PrivateRoute from "./utils/PrivateRoute";
import PublicRoute from "./utils/PublicRoute";

function App() {
  return (<div className="App">
    <BrowserRouter>
      <Routes>

        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/cpu" element={<Cpu />} />
          <Route path="/memory" element={<Memory />} />
          <Route path="/mac" element={<Mac />} />
          <Route path="/showmac/:macaddress" element={<ShowMac />} />
        </Route>
        <Route element={<PublicRoute />}>
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;