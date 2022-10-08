import React from 'react';
import Home from './Home';
import About from './About';
import "./components.css";

export default function Footer() {
  return (
    <div className='footer'>
      <a href={<Home />}>HOME</a>
      <a href={<About />}>ABOUT</a>
      
    </div>
  )
}

