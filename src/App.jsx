import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Login from "./components/login";
import Quiz from "./components/Quiz";
import Result from "./components/Result";

function App() {
  return (
    <div className="container mt-5">
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
        <Link className="navbar-brand" to="/">
          Quiz App
        </Link>
        <div className="ml-auto">
          <Link className="btn btn-outline-primary" to="/login">
            Login
          </Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </div>
  );
}

function Home() {
  return (
    <div className="text-center">
      <h1>Welcome to the Quiz App</h1>
      <p>This is a simple quiz app built with React, React Router, and Bootstrap.</p>
      <Link to="/quiz" className="btn btn-primary">
        Start Quiz
      </Link>
    </div>
  );
}

export default App;
