import React, {useContext, useState} from 'react';
import {Questions} from '../Helpers/QuestionBank' ;
import { QuizContext } from '../Helpers/Contexts';


function Quiz() {

  const [currQuestion, setCurrQuestion] = useState(0) ;
  const [optionChosen, setOptionChosen] = useState("") ;

  const {score , setScore , setGameState} = useContext(QuizContext) ;

  const nextQuestion = () => {
    if(Questions[currQuestion].answer === optionChosen){ //comparing the answer chosen with the correct answer
      setScore(score + 1) ;
    }
    setCurrQuestion(currQuestion + 1) ;  // moving on to the next question card
  };

  const finishQuiz = () => {
  if (Questions[currQuestion].answer === optionChosen){ // moving to endscreen and starting over quiz
    setScore(score + 1) ;
  }
  setGameState("endScreen") ;
}

  return (
    <div className='Quiz'>
      <h1>{Questions[currQuestion].prompt}</h1>
      <div className='options'>
        <button onClick={() => setOptionChosen("A")}>
          {Questions[currQuestion].optionA}
        </button>
        <button onClick={() => setOptionChosen("B")}>
          {Questions[currQuestion].optionB}
        </button>
        <button onClick={() => setOptionChosen("C")}>
          {Questions[currQuestion].optionC}
        </button>
        <button onClick={() => setOptionChosen("D")}>
          {Questions[currQuestion].optionD}
          </button>
      </div>

      <div className='nextButt'>
      {currQuestion === Questions.length - 1 ?(
        <button onClick={finishQuiz}>Finish Quiz</button>
      ) : (
        <button onClick={nextQuestion}> Next Question </button>
      )}
      </div>
    </div>
  );
}
export default Quiz ;