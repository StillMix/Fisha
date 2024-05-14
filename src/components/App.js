import React, { useState } from "react";
import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Menu from "./Menu/Menu";
import Main from "./Main/Main";
import KinoOpi from "./KinoOpi/KinoOpi";
import FilmOpi from "./FilmOpi/FilmOpi";
import Mybil from "./Mybil/Mybil";

function App() {
  const [iskinoOpiOpen, setIskinoOpiOpen] = useState(false);
  const [selectedkinoOp, setselectedkinoOp] = useState(null);
  const [iskinoOpen, setIskinoOpen] = useState(false);
  const [selectedkino, setselectedkino] = useState(null);

  return (
    <div className="App">
      <Routes>
        <Route exact path="/main" element={<Main cardSel={setselectedkinoOp} openkino={setIskinoOpiOpen} />} />
        <Route exact path="/mybil" element={<Mybil />} />
      </Routes>
      <KinoOpi cardSetKino={setselectedkino} SetOpenKino={setIskinoOpen}  card={selectedkinoOp} setOpen={setIskinoOpiOpen} open={iskinoOpiOpen}/>
      <Menu />
      <FilmOpi card={selectedkino} setOpen={setIskinoOpen} open={iskinoOpen} setKinoOpen={setIskinoOpiOpen}/>
    </div>
  );
}

export default App;
