import './App.css';
import React from 'react';
import Home from "./components/Home"
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route exact path="/resultados" element={<Home/>}/>
    <Route exact path="/desempenho" element={<Home/>}/>
    <Route exact path="/tendencias" element={<Home/>}/>
    <Route exact path="/avaliacao" element={<Home/>}/>
    <Route exact path="/vendas-trimestre" element={<Home/>}/>
    <Route exact path="/vendas-mensal" element={<Home/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
