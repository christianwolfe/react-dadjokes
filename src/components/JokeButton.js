import React from 'react'

function JokeButton(props) {
    return (
      <nav>
        <button id="joke-btn" onClick={props.getJoke}>Joke</button>
      </nav>
    );
  }
  
  export default JokeButton;