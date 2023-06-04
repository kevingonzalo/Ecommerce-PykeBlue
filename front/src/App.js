import "./App.css";
import PaginaPrincipal from "./components/PaginaPrincipal";
import Register from "./components/Register";
import Login from "./components/Login.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RecuperarPass from "./components/RecuperarPass";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PaginaPrincipal />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/recuperar-pass" element={<RecuperarPass />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
