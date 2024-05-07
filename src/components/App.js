import React, { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Menu from "./Menu/Menu";
import Main from "./Main/Main";
import KinoOpi from "./KinoOpi/KinoOpi";

function App() {
  const [iskinoOpiOpen, setIskinoOpiOpen] = useState(false);
  const [selectedkinoOp, setselectedkinoOp] = useState(null);

  return (
    <div className="App">
      <Routes>
        <Route path="/main" element={<Main cardSel={setselectedkinoOp} openkino={setIskinoOpiOpen} />} />
      </Routes>
      <KinoOpi card={selectedkinoOp} setOpen={setIskinoOpiOpen} open={iskinoOpiOpen}/>
      <Menu />
    </div>
  );
}

export default App;
