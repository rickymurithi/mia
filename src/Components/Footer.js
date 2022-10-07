import React from 'react';
import "./components.css";

export default function Footer() {
  return (
    <div className='set'>
      <a href={<Home />}>HOME</a>
      <a href={<About />}>ABOUT</a>
      <a href='#'>CONTACTS</a>

      <button type='submit'>SUBSCRIBE</button>
      <div className='subscribeIcon'>(<Subscribe />)</div>

    </div>
  )
}

