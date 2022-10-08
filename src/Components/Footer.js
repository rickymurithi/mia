import React from 'react';
import Home from './Home';
import About from './About';
import "./components.css";
// import { Fi} from "react-icons/fi";

export default function Footer() {
  return (
    <div className='footer'>
      <a href={<Home />}>HOME</a>
      <a href={<About />}>ABOUT</a>
      <a href='#'>CONTACTS</a>

      <button type='button' className='' style={{background: 'pink', borderRadius: '50%'}}>
        {/* <Fi /> */}
        </button>

    </div>
  )
}

