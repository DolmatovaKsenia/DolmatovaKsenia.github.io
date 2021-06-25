import React, { useState } from 'react';
import { findRenderedDOMComponentWithClass } from 'react-dom/test-utils';
import './App.css';

function App() {

  const questions = [
    {
      question: 'why',
      options: [
        'option1',
        'option2',
        'option3',
        'option4'
      ],
      correctAnswer: 2
    },
    {
      question: '2',
      options: [
        'option5',
        'option6',
        'option7',
        'option8'
      ],
      correctAnswer: 3
    },
    {
      question: '3',
      options: [
        'option9',
        'option10',
        'option11',
        'option12'
      ],
      correctAnswer: 1
    }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerClick = (correctAnswer) =>{
    if (correctAnswer) {
      setScore(score + 1);
    }
    else {
      setScore(score);
    }

    const nextQuestion = currentQuestion + 1;

    if (nextQuestion > questions.length) {
      setShowScore(score)
    }
    else {
      setCurrentQuestion(nextQuestion);
    }
  };

  return (
    <div className="project">
      {
        showScore
        ? <div className="score-place">
          <p>Вы правильно ответили на {score} вопроса из {questions.length} </p>
          </div>
          : <div className="quiz">
          <div className="question-place">
              <div className="number-of-questions">
                  <span>{currentQuestion + 1}</span>/{questions.length}
              </div>
              <div className="question">{questions[currentQuestion].question}</div>
          </div>
          <div className="answer-place">
            <button className="option1">{questions[currentQuestion].options[0]}</button>
            <button className="option2">{questions[currentQuestion].options[1]}</button>
            <button className="option3">{questions[currentQuestion].options[2]}</button>
            <button className="option4">{questions[currentQuestion].options[3]}</button>
            <button className="btn-next">Next</button>   
          </div>
      </div>
      }
      </div>
  )} 
export default App;