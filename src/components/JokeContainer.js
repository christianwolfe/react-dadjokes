import React from 'react'


function JokeContainer(props) {
    return (
      <div className="joke-container">
        <p>{props.joke}</p>
      </div>
    );
  }
  
  export default JokeContainer;