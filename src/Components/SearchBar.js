import React, {useState} from 'react';
import './SearchBar.css';
// import SearchIcon from "@material-ui/icons/Search";

function SearchBar({placeholder, data}) {

  const [filteredData, setFilteredData] = useState([]);
  const [wordEnter, setWordEnter] = useState("");


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

  const clearInput =() => {
    setFilteredData([]);
    setWordEnter("");
  }

  return (
    <div className="form">
    <div className="form-body">
        <div className="username">
            <label className="form__label" for="firstName">First Name </label>
            <input className="form__input" type="text" id="firstName" placeholder="First Name"/>
        </div>
        <div className="lastname">
            <label className="form__label" for="lastName">Last Name </label>
            <input  type="text" name="" id="lastName"  className="form__input"placeholder="LastName"/>
        </div>
        <div className="lastname">
            <label className="form__label" for="lastName">Session Type </label>
            <input  type="text" name="" id="lastName"  className="form__input"placeholder="Session Type"/>
        </div>
        <div className="email">
            <label className="form__label" for="email">Email </label>
            <input  type="email" id="email" className="form__input" placeholder="Email"/>
        </div>
        <div className="password">
            <label className="form__label" for="password">Password </label>
            <input className="form__input" type="password"  id="password" placeholder="Password"/>
        </div>
        <div className="confirm-password">
            <label className="form__label" for="confirmPassword">Confirm Password </label>
            <input className="form__input" type="password" id="confirmPassword" placeholder="Confirm Password"/>
        </div>
    </div>
    <div class="footer">
        <button type="submit" class="btn">Submit</button>
        <button type="reset" value="Reset" onClick={clearInput} class="btn">Reset</button>
    </div>
</div>
  )
}

export default SearchBar;



// import React, {useState} from 'react';
// import './SearchBar.css';
// //import SearchIcon from "@material-ui/icons/Search";

// function SearchBar({placeholder, data}) {

//   const [filteredData, setFilteredData] = useState([]);
//   const [wordEnter, setWordEnter] = useState("");


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

//   /*const clearInput =() => {
//     setFilteredData([]);
//     setWordEnter("");
//   }*/

//   return (
//     <div className='search'>
//         <div className='searchInput'>
//           <input type="text" placeholder='Search Package' value={wordEnter} onChange={handleFilter} />
//           <button type='submit' value='submit' >Submit</button>
//           <button type="reset" value="Reset">Reset</button>
          
//         </div>

//       {filteredData.length !==0 && (
//         <div className='dataResult'>
//           {filteredData.slice(0, 3).map((key, value) => {
//             return (<a className='dataItem' href={value.imageLink}> <p>{value.name}</p> </a>)
//         })}
//       </div>
//       )}
//     </div>
//   )
// }

// export default SearchBar;