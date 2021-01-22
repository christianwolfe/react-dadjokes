import React from 'react'


function JokeContainer({joke, handleDelete}) {
    return (
      <div className="joke-container">
        { 
        joke.map(joke => (
          <p key={joke.id}>{joke.joke}
          <button id="del-btn" onClick={ () => handleDelete(joke.id)}>x</button></p>
        ))
          }
      </div>
    );
  }
  
  export default JokeContainer;