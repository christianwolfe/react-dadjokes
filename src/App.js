import './App.css';
import JokeButton from './components/JokeButton';
import Header from './components/Header'
import JokeContainer from './components/JokeContainer'
import { useEffect, useState } from 'react';

function App() {
  const [jokeArray, setJokeArray] = useState([]);
  async function getJoke() {
    
    const jokePromise = fetch('https://icanhazdadjoke.com', {
          headers: {
              Accept: 'application/json'
          }
      });
    const response = await jokePromise;
    const jokeData = await response.json();

    setJokeArray([      //set joke to a brand new array
      ...jokeArray,     //that contains all the exisiting jokes
      jokeData]);  //and add the new joke to the array in state
};

  function deleteJoke(id) {
    //filter out a joke from the jokeArray
    const filteredArray = jokeArray.filter(j => {
      if (j.id === id) {
        return false;
      } else {
        return true;
        }
      })
    // use the jokes id to identify the joke to be deleted
    // setJokeArray using the newly filtered array
    console.log(`You want to delete ${id}`)
    setJokeArray(filteredArray);
  }
  useEffect( () => {
  getJoke();
}, [setJokeArray]);


  return (
    <div className="App">
      <Header></Header>
      <JokeButton getJoke={getJoke}/>
      <JokeContainer
      joke={jokeArray}
      handleDelete={deleteJoke}/>
    </div>
  );
};
export default App;