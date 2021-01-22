import React from 'react'


function JokeContainer(props) {
    return (
      <div className="joke-container">
        { 
        props.joke.map(joke => (
          <p>{joke}</p>
        ))
          }
      </div>
    );
  }
  
  export default JokeContainer;