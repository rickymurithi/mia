import React from 'react';
//import SignUp from './SignUp';
import {Link} from 'react-router-dom'


export default function NavBar() {
  return (
    <div className='navigation'>

      <a href="/" className="brand-name">
       Mia
      </a>
      <button className="hamburger">
        {/* icon from heroicons.com */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className="navigation-menu">
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
          <li>
            <Link to="/signup">SignUp</Link>
          </li>
        </ul>
      </div>

    </div>
  )
}

