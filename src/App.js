import './App.css';
import JokeButton from './components/JokeButton';
import Header from './components/Header'
import JokeContainer from './components/JokeContainer'
import { useEffect, useState } from 'react';

function App() {
  const [joke, setJoke] = useState("");
  async function getJoke() {
    
    const jokePromise = fetch('https://icanhazdadjoke.com', {
          headers: {
              Accept: 'application/json'
          }
      });
    const response = await jokePromise;
    const jokeData = await response.json();

    setJoke(jokeData.joke);
};
  useEffect( () => {
  getJoke();
}, [setJoke]);


  return (
    <div className="App">
      <Header></Header>
      <JokeButton getJoke={getJoke}/>
      <JokeContainer
      joke={joke}/>
    </div>
  );
};
export default App;