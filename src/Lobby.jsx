import React from 'react';
//open page

const handleClick = () =>{
  console.log("GAME STARTED")
}

class Lobby extends React.Component {
  render() {
    const mySpan = <span>This is a span</span>
    return (<div>
      <h1>This is a Lobby</h1>
      {mySpan}
      <button type="button" onClick= {handleClick}>START GAME</button>
    </div>);
  }
}

export default Lobby
