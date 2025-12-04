import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const questions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: "Paris",
  },
  {
    question: "Which language is primarily used for web development?",
    options: ["Python", "C++", "JavaScript", "Java"],
    answer: "JavaScript",
  },
  {
    question: "What is the largest planet in our solar system?",
    options: ["Earth", "Jupiter", "Mars", "Saturn"],
    answer: "Jupiter",
  },
];

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const navigate = useNavigate();

  const handleAnswerClick = (answer) => {
    if (answer === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    setSelectedAnswer(answer);
  };

const handleNextClick = () => {
  if (currentQuestion < questions.length - 1) {
    setCurrentQuestion(currentQuestion + 1);
    setSelectedAnswer("");
  } else {
    localStorage.setItem("score", score); // Save score in localStorage
    navigate("/result"); // Go to the result page
  }
};


  return (
    <div className="text-center">
      <h3>{questions[currentQuestion].question}</h3>
      <div className="list-group">
        {questions[currentQuestion].options.map((option, index) => (
          <button
            key={index}
            className={`list-group-item list-group-item-action ${
              selectedAnswer === option
                ? option === questions[currentQuestion].answer
                  ? "bg-success"
                  : "bg-danger"
                : ""
            }`}
            onClick={() => handleAnswerClick(option)}
          >
            {option}
          </button>
        ))}
      </div>
      <button className="btn btn-primary mt-3" onClick={handleNextClick}>
        {currentQuestion < questions.length - 1 ? "Next Question" : "Finish Quiz"}
      </button>
    </div>
  );
}

export default Quiz;
