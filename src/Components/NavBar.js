import React from 'react';
import SignUp from './SignUp';
import { NavLink } from "react-router-dom";

function NavBar() {
  return (

    <div className='nav'>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/services">Services</NavLink>

      <a href={<SignUp />}> <p><SignUp /></p> </a>

    </div>
  )
}

export default NavBar;