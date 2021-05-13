import React, { useState } from 'react'
import ReactDOM from 'react-dom';
import SearchUser from './SearchUser.jsx'
import GameScreen from './GameScreen.jsx'
import queenLogo from './queen-logo.png'
import './App.css'

// Importing asteroid images 
// import FaCLogo from "./Images/FaCLogo.png";
// import GitHubLogo from "./Images/GitHubLogo.jpg";
// import HerokuLogo from "./Images/HerokuLogo.png";
// import ReactLogo from "./Images/ReactLogo.png";



function App() {
  const [username, setUsername] = React.useState('tiarama')
  const [score, setScore] = React.useState(0)
  const [gameStart, setGameStart] = React.useState(false)
  const [profileData, setProfileData] = React.useState('')

  return (  
    <div className="App" id="appRoot">
      <img className="logo" src={queenLogo} />
      <main>
        <SearchUser username={username} setUsername={setUsername} setProfileData={setProfileData} setGameStart={setGameStart} />
      <div>
      </div>
      <GameScreen score={score} setScore={setScore} name={username} profileData={profileData} setProfileData={setProfileData} gameStart={gameStart}/>
    </main>
    </div>
  )
}


export default App
