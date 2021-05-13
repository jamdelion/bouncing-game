import React from 'react'
import { Asteroid } from './Asteroid.jsx'

function GameScreen({score, setScore}) {

    const asteroids = Array.from({length:10}, () => <Asteroid setScore={setScore}/>)

    // React.useEffect(() => {
    //     setGameScore((gameScore) => gameScore+1)
    // }, [score]);

    return (
    <>
    {asteroids}
    <h2>Score: {score}</h2>
    </>
    )
}

export default GameScreen