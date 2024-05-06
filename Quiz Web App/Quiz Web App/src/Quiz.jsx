import React, { useState } from "react";
import { quizData } from "./quizData";
import FinalResult from "./FinalResult";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [clickedOption, setClickedOption] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const changeQuestion = () => {
    updateScore();
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setClickedOption(0);
    } else {
      setShowResult(true);
    }
  };

  const updateScore = () => {
    if (clickedOption === quizData[currentQuestion].answer) {
      setScore(score + 1);
    }
  };

  const resetAll = () => {
    setShowResult(false);
    setCurrentQuestion(0);
    setClickedOption(0);
    setScore(0);
  };
  return (
    <div>
      <p className="heading-txt">Quiz App</p>
      <div className="container">
        {showResult ? (
          <FinalResult
            score={score}
            totalScore={quizData.length}
            tryAgain={resetAll}
          />
        ) : (
          <>
            <div className="question">
              <span id="question-number">{currentQuestion + 1}.</span>
              <span id="question-txt">
                {quizData[currentQuestion].question}
              </span>
            </div>
            <div className="option-container">
              {quizData[currentQuestion].options.map((option, i) => (
                <button
                  key={i} 
                  className={`option-btn ${
                    clickedOption == i + 1 ? "checked" : null
                  }`}
                  onClick={() => setClickedOption(i + 1)}
                >
                  {option}
                </button>
              ))}
            </div>
            <input
              type="button"
              value="Next"
              id="next-button"
              onClick={changeQuestion}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Quiz;
