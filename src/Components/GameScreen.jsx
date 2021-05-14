import React from 'react'
import Fetch from './Fetch'

function GameScreen({score, setScore, name, profileData, setProfileData, gameStart}) {

    // React.useEffect(() => {
    //     setGameScore((gameScore) => gameScore+1)
    // }, [score]);

    return (
    <>
    {gameStart ? <Fetch setScore={setScore} name={name} profileData={profileData} setProfileData={setProfileData} gameStart={gameStart}/> : null}
    <h2 className="score">Score: <u>{score}</u></h2>
    </>
    )

}

export default GameScreen