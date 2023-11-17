import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Desenpenho from "./pages/Desenpenho";
import Tendencias from "./pages/Tendencias";
import Avaliacao from "./pages/Avaliacao";
import VendasMensais from "./pages/VendasMensais";
import VendasTrimestre from './pages/VendasTrimestre';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/resultados" element={<Home />} />
        <Route exact path="/desempenho" element={<Desenpenho />} />
        <Route exact path="/tendencias" element={<Tendencias />} />
        <Route exact path="/avaliacao" element={<Avaliacao />} />
        <Route exact path="/vendas-trimestre" element={<VendasTrimestre />} />
        <Route exact path="/vendas-mensais" element={<VendasMensais />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
