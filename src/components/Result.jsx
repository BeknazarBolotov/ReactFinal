import React from "react";
import { useNavigate } from "react-router-dom";

function Result() {
  const score = localStorage.getItem("score"); // Get score from localStorage
  const username = localStorage.getItem("username");
  const navigate = useNavigate();

  return (
    <div className="text-center">
      <h3>Quiz Completed</h3>
      <p>
        {username}, your score is {score} / 3
      </p>
      <button className="btn btn-primary" onClick={() => navigate("/")}>
        Go to Home
      </button>
    </div>
  );
}

export default Result;
