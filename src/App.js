import React from "react";
import { Route, Routes } from "react-router-dom";

import NavBar from './Components/NavBar';
import Services from './Components/Services';
import About from "./Components/About";
import Home from "./Components/Home";
//import SignUp from "./Components/SignUp";

import './App.css';


function App() {
  return (
    <div>
      <NavBar />
      {/* <Home />
      <About /> */}
      <Routes>
        <Route path="/home" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/services" element={<Services />}/>
        {/*<Route path="/signup" element={<SignUP />}/>*/}
      </Routes>
    </div>
    
  );
}

export default App;