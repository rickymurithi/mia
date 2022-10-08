import React, {useState} from 'react';
import './SearchBar.css';
//import SearchIcon from "@material-ui/icons/Search";

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

  /*const clearInput =() => {
    setFilteredData([]);
    setWordEnter("");
  }*/

  return (
    <div className='search'>
        <div className='searchInput'>
          <input type="text" placeholder='Search Package' value={wordEnter} onChange={handleFilter} />
          <button type='submit' value='submit' >Submit</button>
          <button type="reset" value="Reset">Reset</button>
          
        </div>

      {filteredData.length !==0 && (
        <div className='dataResult'>
          {filteredData.slice(0, 3).map((key, value) => {
            return (<a className='dataItem' href={value.imageLink}> <p>{value.name}</p> </a>)
        })}
      </div>
      )}
    </div>
  )
}

export default SearchBar;