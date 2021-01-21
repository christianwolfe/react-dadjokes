import React from 'react'

function JokeButton(props) {
    return (
      <nav>
        <button onClick={props.getJoke}>Joke</button>
      </nav>
    );
  }
  
  export default JokeButton;