import React, { useState, useEffect } from "react";
import axios from "axios";

const Quiz = ({ onComplete }) => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/questions")
      .then((response) => {
        if (response.data && Array.isArray(response.data.questions)) {
          setQuestions(response.data.questions);
        } else {
          throw new Error("Invalid API response format");
        }
      })
      .catch((error) => {
        console.error("Error fetching questions:", error);
        setError("Failed to load questions. Try again later.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) setScore(score + 10);
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      onComplete(score);
    }
  };

  if (loading) return <p className="text-center text-white">Loading...</p>;
  if (error) return <p className="text-center text-red-400">{error}</p>;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-700 text-white p-6">
      <div className="bg-white/10 backdrop-blur-lg shadow-lg p-8 rounded-lg w-full max-w-lg text-center">
        <h1 className="text-2xl font-bold mb-6">
          {questions[currentQuestion]?.description}
        </h1>
        <div className="grid gap-3">
          {questions[currentQuestion]?.options.map((option, index) => (
            <button
              key={index}
              className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
              onClick={() => handleAnswer(option.isCorrect)}
            >
              {option.description}
            </button>
          ))}
        </div>
        <p className="mt-6 text-lg font-medium text-gray-200">Score: {score}</p>
      </div>
    </div>
  );
};

export default Quiz;
