import React, { useState } from 'react';
import { navigate } from '@reach/router';
import axios from 'axios';
// import bootstrap from 'bootstrap/dis/css/bootstrap.mis.css'


const HomeComponent = (props) => {
  const [search, setSearch] = useState({category:"--Select--", id:""})
  const [display, setDisplay] = useState({})
  

  const submitSearch = e =>{
    e.preventDefault();
    console.log(search);

    let nav = '/' + search.category + '/'+ search.id
    navigate(nav);

    let navapi = "https://swapi.co/api/" + search.category + '/'+ search.id
    setSearch({category:"--Select--", id:""})
    console.log(navapi);
    axios.get(navapi)
      
        .then(res => {
          console.log(res.data);
          setDisplay(res.data)})
        .catch(err => {console.log(err)},[])        
  }
  console.log(display)

  const onChange = e => {
    setSearch({
        ...search,
        [e.target.name]: e.target.value
    });
    }

  const keys = Object.keys(display);
  
  return (
      <div>
        <form onSubmit={submitSearch}>
        <h1>Search for:</h1>
        <select name="category" onChange={onChange} value={search.category}>
          <option disabled selected>--Select--</option>
          <option value="people">People</option>
          <option value="planets">Planet</option>
          <option value="spaceships">Spaceship</option>
        </select>
        <h1>ID:</h1>
        <input type="text" name="id" onChange={onChange} value={search.id}></input>
        <input type="submit" value="Search" />  
        </form>        

        <ul>
          {keys.map((key) => 
            <li style={{textAlign:"left"}}>{key}: {display[key]}</li>
          )}
        </ul>

        {/* {Object.keys(display).map((key) => ( 
          <p>{key}: {display[key]}</p>
        ))} */}
      </div>

  );
}

export default HomeComponent;


