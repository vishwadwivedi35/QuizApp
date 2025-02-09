📌 Quiz Application

🚀 Overview

This is a web-based quiz application that dynamically fetches quiz questions from an API and presents them through a sleek and interactive user interface. The app tracks user scores and displays a summary upon quiz completion.

🎯 Features

✅ Fetches quiz questions dynamically from an API.

✅ Displays multiple-choice questions with an elegant UI.

✅ Tracks and calculates the final score.

✅ Shows a result screen with total points.

✅ Allows users to restart the quiz.

✅ Fully responsive and visually stunning design using pure CSS.

🛠️ Tech Stack

React.js (Frontend Framework)

Pure CSS (Custom styles, no Tailwind)

Axios (For API requests)

Node.js & Express (Backend Proxy) (To bypass CORS restrictions)

📂 Project Folder Structure

quiz-app/
│── src/
│ ├── components/
│ │ ├── Quiz.js # Main quiz logic
│ │ ├── StartScreen.js # Start button screen
│ │ ├── ResultScreen.js # Final result screen
│ ├── styles/
│ │ ├── global.css # Global styles
│ │ ├── startScreen.css # Start screen styles
│ │ ├── quiz.css # Quiz screen styles
│ │ ├── resultScreen.css # Result screen styles
│ ├── App.js # Main application logic
│ ├── index.css # Imports global styles
│── proxyServer.js # Backend proxy (Fixes CORS issue)
│── package.json
│── README.md

📌 Setup Instructions

1️⃣ Clone the Repository

git clone https://github.com/vishwadwivedi35/quiz-app.git
cd quiz-app

2️⃣ Install Dependencies

npm install

3️⃣ Start the Backend Proxy Server

Since the API has CORS restrictions, run the local proxy:

node proxyServer.js

4️⃣ Start the Frontend React App

npm start

🎥 Screenshots & Video Walkthrough

https://drive.google.com/drive/folders/1m9TWJD0aJbzTolQmIfsZ1jP-kWwSQ4s8?usp=sharing

📜 License

This project is open-source and free to use.
