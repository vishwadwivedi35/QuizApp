import { useState } from "react";
import Quiz from "./components/Quiz";
import StartScreen from "./components/StartScreen";
import ResultScreen from "./components/ResultScreen";
import "./styles.css";

function App() {
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [score, setScore] = useState(0);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      {!quizStarted ? (
        <StartScreen onStart={() => setQuizStarted(true)} />
      ) : quizCompleted ? (
        <ResultScreen
          score={score}
          onRestart={() => {
            setQuizStarted(false);
            setQuizCompleted(false);
            setScore(0);
          }}
        />
      ) : (
        <Quiz
          onComplete={(finalScore) => {
            setScore(finalScore);
            setQuizCompleted(true);
          }}
        />
      )}
    </div>
  );
}

export default App;
