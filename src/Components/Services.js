import React from 'react'
import SearchBar from './SearchBar'
import Footer from './Footer';


function Services() {


  return (
    <div className='card'>
      <h1>SERVICES</h1>

      <div className='card1'>
        <h2>SELF BOOKING</h2>
        <SearchBar placeholder='Search Package' data={}/>
      </div>

      <div className='card2'>
        <h2>GROUP BOOKING</h2>
        <SearchBar placeholder='Search Package' data={}/>
      </div>

      <div className='footer'>
        <Footer />
      </div>
    </div>
    
  )
}

export default Services;