import React from "react";
import styled from 'styled-components';

 const SquanchCard = styled.div`
 height:400px;
 width:90%;
 display:flex;
 flex-direction:column;
 justify-content: space-evenly;
 align-items: center;
 margin: 15px;
 border: 3px solid green;
 `;
 const CharImg =styled.img`
 height: 150px;
 `

export default function CharacterCard(props) {

  return <span>
      <SquanchCard>
          <h2>Name: {props.person.name}</h2>
          <CharImg alt='' src={props.person.image}/>
          <h2>Location: {props.person.location.name}</h2>
          <h2>Status: {props.person.status}</h2>

      </SquanchCard>
      </span>
}
