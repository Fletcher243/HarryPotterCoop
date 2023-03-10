import React from 'react';
import { writeUserData } from './database/writeSomething'

class Battlefield extends React.Component {
  render() {
    return (
    <div> 
      <h1 className='battlefield'>This is the Battlefield</h1>
      <img src="/images/Board.jpg" alt="board"></img>
      
    </div>);
  }
}

export default Battlefield
