import './App.css';
import React from 'react';
import Home from "./pages/home"

import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
