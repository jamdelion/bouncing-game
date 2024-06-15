import React from "react";
import Asteroids from "./Asteroids";

const GameScreen = ({ score, setScore, gameStart }) => {
  return (
    <>
      <Asteroids setScore={setScore} gameStart={gameStart} />

      <h2 className="score">
        Score:{" "}
        <span className="score-number">
          <u>{score}</u>
        </span>
      </h2>
    </>
  );
};

export default GameScreen;
