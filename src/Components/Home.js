import React from 'react';
import "./components.css";
//import {image} from "../assets/happy"
import happy from "../assets/happy.jpg"

export default function Home() {
  return (
    <div className='home'>
      <div className='home1'>
        <h1 class="font-weight-light">MIA</h1>
        <p>Your Daily guide to Wellness and Happiness.</p>
      </div>
      <div className='image'>
      <img src={happy} alt="happy"/>
    </div>
    </div>
  )
}

