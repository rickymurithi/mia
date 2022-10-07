import React, { useEffect } from 'react';
import SearchBar from './SearchBar';
import Footer from './Footer';
import "./components.css";


export default function Services() {
  const [images, setImages] = useState([]);
  const [searchValue, setSearchValue] = useState([]);
    
  useEffect(() => {

    fetch("http://localhost:3000/images")
    .then((response) => response.json())
    .then((response) => {
      setImages(response);
      setSearchValue(response);
    });
  }, []);

  function change(event) {
    setImages(
      searchValue.filter((images) =>
        images.title.toLowerCase().includes(event.target.value.toLowerCase())
      )
    );
  }

  return (
    <div className='card'>
      <div className='card0'>
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
          <p>© 2022 MIA, Inc.</p>
        </div>
      </div>
    </div>
  )
}

