import { useEffect, useState } from "react";
import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import './App.css';
import Home from "./pages/home/home";
import Login from "./pages/login/login";

function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    const u = localStorage.getItem("user");
    u && JSON.parse(u) ? setUser(true) : setUser(false);
  }, [])

  useEffect(() => {
    localStorage.setItem("user", user);
  }, [user]);

  return (
      <Routes>
        
        {!user && 
        <Route path="/login" element={<Login/>}/>
        }
        {user && 
        <Route path="/" element={<Home />} /> 
        }

        <Route path="*" element={<Navigate to = {user ? "/" : "/login"} />} />

      </Routes>
  );
}

export default App;