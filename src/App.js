import './App.css';
import React, {useState} from 'react';
import MainMenu from './Components/MainMenu';
import Quiz from './Components/Quiz';
import { QuizContext } from './Helpers/Contexts';
import EndScreen from './Components/EndScreen';


function App() {
  const [gameState, setGameState] = useState("menu") ;
  const [score, setScore] = useState(0) ;

  return (
    <div className="App">
     <h1 className='title'> Quiz App</h1>

     <QuizContext.Provider //wrapper class - globally declares the States
     value={{gameState, setGameState, score, setScore}}>
     {gameState === "menu" && <MainMenu/>}
     {gameState === "quiz" && <Quiz/>}
     {gameState === "endScreen" && <EndScreen/>}
     </QuizContext.Provider>
    </div>
  );
}

export default App;
