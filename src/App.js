import React from "react";
import { BrowserRouter, Route, route } from "react-router-dom";
import { FiSettings} from "react-icons/fi";
import NavBar from './Components/NavBar';
import Services from './Components/Services';

import './App.css';
import SignUp from "./Components/SignUp";

function App() {
  return (
    <div>
      <NavBar />
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="App">
            <switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/services">
                <Services />
              </Route>
              <Route path="/signup">
                <SignUp />
              </Route>
              <Route exact path="/">
                <Home />
              </Route>
            </switch>
          </div>
        </div>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
