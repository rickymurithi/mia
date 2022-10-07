import React from 'react';
import "./footer.css";

function Footer() {
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

export default Footer