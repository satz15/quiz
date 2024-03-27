import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const QuizApp = () => {
  const questions = [
    {
      questionText: 'What is the capital of France?',
      answerOptions: [
        { answerText: 'Paris', isCorrect: true },
        { answerText: 'London', isCorrect: false },
        { answerText: 'Berlin', isCorrect: false },
        { answerText: 'Madrid', isCorrect: false },
      ],
    },
    {
      questionText: 'Which planet is known as the Red Planet?',
      answerOptions: [
        { answerText: 'Venus', isCorrect: false },
        { answerText: 'Jupiter', isCorrect: false },
        { answerText: 'Mars', isCorrect: true },
        { answerText: 'Saturn', isCorrect: false },
      ],
    },
    {
      questionText: 'Who wrote "To Kill a Mockingbird"?',
      answerOptions: [
        { answerText: 'Harper Lee', isCorrect: true },
        { answerText: 'Stephen King', isCorrect: false },
        { answerText: 'J.K. Rowling', isCorrect: false },
        { answerText: 'Mark Twain', isCorrect: false },
      ],
    },
    {
      questionText: 'What is the chemical symbol for water?',
      answerOptions: [
        { answerText: 'H2O', isCorrect: true },
        { answerText: 'CO2', isCorrect: false },
        { answerText: 'NaCl', isCorrect: false },
        { answerText: 'O2', isCorrect: false },
      ],
    },
    {
      questionText: 'Who painted the Mona Lisa?',
      answerOptions: [
        { answerText: 'Leonardo da Vinci', isCorrect: true },
        { answerText: 'Pablo Picasso', isCorrect: false },
        { answerText: 'Vincent van Gogh', isCorrect: false },
        { answerText: 'Claude Monet', isCorrect: false },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div className='app'>
      {showScore ? (
        <div className='score-section'>
          You scored {score} out of {questions.length}
          <button onClick={restartQuiz}>Restart Quiz</button>
        </div>
      ) : (
        <>
          <div className='question-section'>
            <div className='question-count'>
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className='question-text'>{questions[currentQuestion].questionText}</div>
          </div>
          <div className='answer-section'>
            {questions[currentQuestion].answerOptions.map((answerOption, index) => (
              <button key={index} onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default QuizApp;
