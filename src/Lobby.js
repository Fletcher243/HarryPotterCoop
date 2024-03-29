import React from 'react';
import { Link } from 'react-router-dom'

const handleClick = () =>{
  console.log("GAME STARTED")
}

const Lobby = () => {
  const signedIn = false
  const characterPrompt = <div>Choose a Character: {"\t"}
    <select>
        <option value="harry">Harry Potter</option>
        <option value="hermione">Hermione</option>
        <option value="ron">Ron</option>
        <option value="neville">Neville</option>
          
    </select> </div>
  return (<div>
    Harry Potter Boardgame Lobby
    {characterPrompt}
    <Link to='/battlefield'>START GAME</Link>
      </div>);
}

export default Lobby
