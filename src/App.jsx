import React, { useState } from "react";
import GameScreen from "./Components/GameScreen.jsx";
import mollyLogo from "./Images/Molly-logo.png";
import "./Styles/App.css";

function App() {
  const [score, setScore] = useState(0);

  const handleReset = () => {
    setScore(0);
    resetBlobs();
  };

  return (
    <div className="App" id="appRoot">
      <div className="sky" />
      <img className="logo" src={mollyLogo} />
      <main>
        <GameScreen score={score} setScore={setScore} />
        <button onClick={handleReset}>Reset</button>
      </main>
    </div>
  );
}

export default App;
