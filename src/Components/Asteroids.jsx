import React from "react";
import Molly from "../Images/Molly.png";
import { Asteroid } from "./Asteroid.jsx";

const Asteroids = ({ setScore, initialDistanceFromTop }) => {
  const asteroids = Array.from({ length: 10 }, () => (
    <Asteroid
      setScore={setScore}
      name={"Molly"}
      image={Molly}
    />
  ));

  return <div>{asteroids}</div>;
};

export default Asteroids;
