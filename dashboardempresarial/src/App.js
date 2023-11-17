import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Desenpenho from "./components/Desenpenho";
import Tendencias from "./components/Tendencias";
import Avaliacao from "./components/Avaliacao";
import VendasMensais from "./components/VendasMensais";
import VendasTrimestre from './components/VendasTrimestre';
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
