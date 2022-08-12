import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeaderTask from "./components/HeaderTask";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import SignUpPage from "./components/SignUpPage";

const App = () => {
  return <BrowserRouter>
    <HeaderTask />
    <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/login" element={<LoginPage/>}/>
    <Route path="/signup" element={<SignUpPage/>}/>
    </Routes>
  </BrowserRouter>;
};

export default App;