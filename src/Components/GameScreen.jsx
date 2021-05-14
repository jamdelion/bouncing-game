import React from 'react'
import Fetch from './Fetch'

function GameScreen({score, setScore, name, profileData, setProfileData, gameStart}) {

    // React.useEffect(() => {
    //     setGameScore((gameScore) => gameScore+1)
    // }, [score]);

    return (
    <>
    {gameStart ? <Fetch setScore={setScore} name={name} profileData={profileData} setProfileData={setProfileData} gameStart={gameStart}/> : null}
    <h2 className="score">Score: <span className="score-number" ><u>{score}</u></span></h2>
    </>
    )

}

export default GameScreen