import React from 'react';
import SignUp from './SignUp';
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (

    <div className='nav'>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/services">Services</NavLink>

      <a href={<SignUp />}>SignUp</a>

    </div>
  )
}

