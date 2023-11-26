import './index.css';
import LetterBlock from './components/LetterBlock';
import { useState } from 'react';
import Points from './components/Points';

function App() {

  const numbers = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
  const newNumbers = [];
  const [computerGenerated, setComputerGenerated] = useState(randomLetter());
  const [points, setPoints]= useState(0);

  function randomLetter(){
    return numbers[Math.floor(Math.random()*numbers.length)];
  }

  for (let index = 0; index < 102; index++) {
    newNumbers.push(randomLetter())
  }

  return (
    <div className="App">

      <h3>FIND: {computerGenerated}</h3>
      <Points points={points}/>

      <div className="gameContainer">
        {
          newNumbers.map((letter, index) => {
            return <LetterBlock key={index} letterCharacter={letter} computerGenerated ={computerGenerated} points={points} setPoints={setPoints}/>
          })
        }
      </div>
    </div>
  );
}

export default App;
