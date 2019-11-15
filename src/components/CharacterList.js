import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard'


export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
const [character, setCharacter] = useState([])
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    const getCharacters = ()=> {
    axios.get('https://rickandmortyapi.com/api/character/')
    .then(res=>{
      setCharacter(res.data.results)})

    .catch(err=>{console.log(err.response);})
 
    }
 
    getCharacters();
    }, []);
    console.log(character)

  return (
    <section className="character-list">
     ( <div className = "grid-view">
    {character.map( (item, index) => {
        return <CharacterCard person = {item} key={index}/>
    })}
    </div>
   )
    </section>
  );
}
