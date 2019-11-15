import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard';
import SearchForm from './SearchForm';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
const [character, setCharacter] = useState([])
const [search,setSearch]= useState(character)
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    
    axios.get('https://rickandmortyapi.com/api/character/')
    .then(res=>{
      setCharacter(res.data.results)})

    .catch(err=>{console.log(err.response);})
 
    
 
   
    }, []);
    console.log(character)
    const handleSearch = (input)=>{
      console.log(input)
      setCharacter(
        character.filter(item =>{ 
          return item.name.toLowerCase().includes(input.toLowerCase())
        })
      )
    }
  return (
    <section className="character-list">
     {/* ( <div className = "grid-view">
    {character.map( (item, index) => {
        return <CharacterCard person = {item} key={index}/>
    })}
    </div>
   ) */}
   <SearchForm character={character} handleSearch={handleSearch}/>

    </section>
  );
}
