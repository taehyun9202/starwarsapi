import React, { useState } from 'react';
// import { Link } from '@reach/router';

const HomeComponent = (props) => {
  const [search, setSearch] = useState({category:"people", id:""})
  

  const submitSearch = e =>{
    e.preventDefault();
    console.log(search);
    setSearch({
      ...search,
      [e.target.name]: e.target.value
  });
  }

  const onChange = e => {
    setSearch({
        ...search,
        [e.target.name]: e.target.value
    });
    }
  
  return (
      <div>
        <form onSubmit={submitSearch}>
        <h1>Search for:</h1>
        <select name="category" onChange={onChange}>
          <option value="people">People</option>
          <option value="planet">Planet</option>
        </select>
        <h1>ID:</h1>
        <input type="text" name="id" onChange={onChange}></input>
        <input type="submit" value="Search" />     
        </form>

        <p>Category:{search.category}</p>
        <p>Id :{search.id}</p>
      </div>
  );
}

export default HomeComponent;


