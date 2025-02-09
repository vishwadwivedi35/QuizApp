import "../styles/resultScreen.css";

const ResultScreen = ({ score, onRestart }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-green-900 to-teal-900 text-white p-6">
      <div className="bg-white/10 backdrop-blur-lg shadow-lg p-8 rounded-lg text-center w-full max-w-md">
        <h1 className="text-3xl font-bold mb-4">🎉 Quiz Completed!</h1>
        <p className="text-xl font-semibold mb-6">
          Your Score: <span className="text-yellow-400">{score}</span>
        </p>
        <button
          className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
          onClick={onRestart}
        >
          Restart Quiz
        </button>
      </div>
    </div>
  );
};

export default ResultScreen;
