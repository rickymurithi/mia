import React from 'react';
import {Link} from 'react-router-dom'
import "./components.css";


export default function Footer() {
  return (
    <div className="footer">
      <ul>
        <li>
          <Link to="/home">Home</Link>      
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
      </ul>
    </div>
  )
}

