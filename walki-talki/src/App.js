import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Chat from "./pages/Chat";
import Translate from "./pages/Translate";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chat" element={<Chat />} />
        <Route path="/login" element={<Login />} />
        <Route path="/trans" element={<Translate />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
