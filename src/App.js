import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import NavBar from './Components/NavBar';
import Services from './Components/Services';
import About from "./Components/About";
import Home from "./Components/Home";

import './App.css';
import SignUp from "./Components/SignUp";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/about">
                <About />
              </Route>
              <Route path="/services">
                <Services />
              </Route>
              <Route path="/signup">
                <SignUp />
              </Route>
              <Route path="/">
                <Home />
              </Route>
      </Routes>
    </div>
  );
}

export default App;
