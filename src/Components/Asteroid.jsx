import { useState, useEffect } from "react";
import React from "react";

const score = 0;

function Asteroid({ setScore, name, image }) {
  const [distanceFromTop, setDistanceFromTop] = useState(-10);
  const [speed, setSpeed] = useState(Math.random() * 5 + 5);
  const [distanceFromLeft, setDistanceFromLeft] = useState(Math.random() * 100);

  useEffect(() => {
    const moveInterval = setInterval(() => {
      setDistanceFromTop((distanceFromTop) => distanceFromTop + speed);
    }, 1000);
    return () => clearInterval(moveInterval);
  }, [speed]);

  const mouseCollision = () => {
    setDistanceFromTop(() => -10);
    setDistanceFromLeft(() => Math.random() * 100);
    setSpeed((speed) => speed + 10);
    setScore((score) => score + 1);
  };

  return (
    <img
      src={image}
      alt="user Logo"
      onMouseEnter={mouseCollision}
      className="Asteroid"
      style={{
        transform: `translate(${distanceFromLeft}vw, ${distanceFromTop}vh)`,
      }}
    />
  );
}

export { Asteroid, score };
