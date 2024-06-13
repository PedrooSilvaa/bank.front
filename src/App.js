import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Logon from './pages/CreateLoginCliente/CreateLogin';
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import CreateTransacao from "./components/CreateTransacao/CreateTransacao";

function App() {
  return (
    <div className="App">
       <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />

          <Route path="/logon" element={<Logon />} />

          <Route path="/home" element={<Home />} />

          <Route path="/transacao" element={<CreateTransacao></CreateTransacao>} />


        </Routes>
      </BrowserRouter>
    </div>
    </div>
  );
}

export default App;
