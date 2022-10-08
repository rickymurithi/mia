import React, { useEffect } from 'react';
import SearchBar from './SearchBar';
import Footer from './Footer';
import "./components.css";
import Card from './Card';


export default function Services() {
  const [images, setImages] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState([]);
  const [filteredData, setFilteredData] = React.useState([]);
  const [wordEnter, setWordEnter] = React.useState("");

  const [data,setData]=React.useState([]);
  const getData=()=>{
    fetch('http://localhost:8002/images'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        setData(myJson)
      });
  }
  useEffect(()=>{
    getData()
  },[])

  function change(event) {
    setImages(
      searchValue.filter((images) =>
        images.title.toLowerCase().includes(event.target.value.toLowerCase())
      )
    );
  }
  const handleFilter =(event) => {
    const searchWord = event.target.value;
    setWordEnter(searchWord)
    const newFilter = data.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });

    if((searchWord) === "") {
      setFilteredData([]);
    } else{
      setFilteredData(newFilter);
    }
  };

  return (
    <div className='services'>
        <h1>SERVICES</h1>   
        <div className='service-card'>
              {
            data && data.length>0 && data.map((item)=> <Card author={item.author} description={item.description} imgUrl={item.imgUrl} name={item.name}/>)
          } 
        </div>

        <div className='card1'>
          <h2>SELF BOOKING</h2>
          <SearchBar placeholder='Search Package' />
        </div>

        <div className='card2'>
          <h2>GROUP BOOKING</h2>
          <SearchBar placeholder='Search Package' onChange={handleFilter}/>
        </div>

        <div className='footer'>
          <Footer />
          <p>© 2022 MIA, Inc.</p>
        </div>
    </div>
  )
}






// import React, { useEffect } from 'react';
// import SearchBar from './SearchBar';
// import Footer from './Footer';
// import "./components.css";
// import Card from './card';


// export default function Services() {
//   const [images, setImages] = React.useState([]);
//   const [searchValue, setSearchValue] = React.useState([]);
//   const [filteredData, setFilteredData] = React.useState([]);
//   const [wordEnter, setWordEnter] = React.useState("");

//   const [data,setData]=React.useState([]);
//   const getData=()=>{
//     fetch('http://localhost:8002/images'
//     ,{
//       headers : { 
//         'Content-Type': 'application/json',
//         'Accept': 'application/json'
//        }
//     }
//     )
//       .then(function(response){
//         console.log(response)
//         return response.json();
//       })
//       .then(function(myJson) {
//         console.log(myJson);
//         setData(myJson)
//       });
//   }
//   useEffect(()=>{
//     getData()
//   },[])
    

//   function change(event) {
//     setImages(
//       searchValue.filter((images) =>
//         images.title.toLowerCase().includes(event.target.value.toLowerCase())
//       )
//     );
//   }
//   const handleFilter =(event) => {
//     const searchWord = event.target.value;
//     setWordEnter(searchWord)
//     const newFilter = data.filter((value) => {
//       return value.name.toLowerCase().includes(searchWord.toLowerCase());
//     });

//     if((searchWord) === "") {
//       setFilteredData([]);
//     } else{
//       setFilteredData(newFilter);
//     }
//   };

//   return (
//     <div className='services'>
//       <h1>SERVICES</h1>
//       <div className='service-card'>
//         {
//           data && data.length>0 && data.map((item)=> <Card author={item.author} description={item.description} imgUrl={item.imgUrl} name={item.name}/>)
//           } 
//         </div>
//         <div className='card1'>
//           <h2>SELF BOOKING</h2>
//           <SearchBar placeholder='Search Package'/>
//         </div>

//         <div className='card2'>
//           <h2>GROUP BOOKING</h2>
//           <SearchBar placeholder='Search Package' onChange={handleFilter}/>
//         </div>

//         <div className='footer'>
//           <Footer />
//           <p>© 2022 MIA, Inc.</p>
//         </div>
//     </div>
//   )
// }

