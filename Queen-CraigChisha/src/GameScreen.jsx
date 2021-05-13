import React from 'react'
import Asteroid from './Asteroid.jsx'

function GameScreen() {

    const asteroids = Array.from({length:10}, () => <Asteroid/>)


    return (
    <>
    {asteroids}
    </>
    )
}

export default GameScreen