import React from 'react';
//open page
class Lobby extends React.Component {
  render() {
    const mySpan = <span>This is a span</span>
    return (<div>
      This is the Lobby
      {mySpan}
    </div>);
  }
}

export default Lobby
