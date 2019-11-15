import React from "react";

export default function CharacterCard(props) {

  return<span>
      <div className ="teamCard">
          <h2>Name: {props.person.name}</h2>
          <image src={props.person.image}/>
          <h2>Location: {props.person.location.name}</h2>
          <h2>Status: {props.person.status}</h2>

      </div>
      </span>
}
