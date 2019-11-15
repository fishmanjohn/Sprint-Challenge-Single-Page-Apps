import React, { useState, useEffect } from "react";
import CharacterCard from "./CharacterCard";


export default function SearchForm(props) {
  
 const [searchTerm, setSearchTerm]=useState("")
 const [searchResults, setSearchResults]=useState()
 console.log()

// useEffect(()=>{
//   setSearchResults(
//   props.character.filter((item)=>{
//   item.name.toLowerCase().includes(searchTerm.toLowerCase()) 
// }))
// },[searchTerm])


 const handleChange = e => {
   setSearchTerm(e.target.value)
   
 }
 console.log(searchResults)
  return (
    <section className="search-form">
      <form onSubmit={(e)=>{
        e.preventDefault()
        props.handleSearch(searchTerm)
      }}>
     <label htmlFor="name">Search:</label>
     <input id ="name" 
     type="text" 
     name="textfeild" 
     placeholder="Search"
     onChange={handleChange}/>
     </form>
     <ul>
  {props.character.map(character=>(<li><CharacterCard person={character}/></li>))}
     </ul>
    </section>
  );
}
