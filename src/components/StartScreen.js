import "../styles/startScreen.css";

const StartScreen = ({ onStart }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-900 to-indigo-900 text-white p-6">
      <div className="bg-white/10 backdrop-blur-lg shadow-lg p-8 rounded-lg text-center w-full max-w-md">
        <h1 className="text-3xl font-bold mb-4">
          🚀 Welcome to the Ultimate Quiz!
        </h1>
        <p className="text-lg mb-4">
          Test your knowledge & challenge yourself!
        </p>
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
          onClick={onStart}
        >
          Start Quiz
        </button>
      </div>
    </div>
  );
};

export default StartScreen;
