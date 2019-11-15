import React from "react";
import {BrowserRouter as Router,Link,Route} from 'react-router-dom';
import CharicterList from './CharacterList'
export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
        <Router>
          <Link to='/' >Home</Link>
          <Link to='/CharactersList'> CharacterList</Link>
        <Route path ='/CharactersList' component ={CharicterList}/>
        </Router>
      </header>
    </section>
  );
}
