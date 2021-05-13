import React, { useState } from 'react'
import ReactDOM from 'react-dom';
import Profile from './Profile.jsx'
import SearchUser from './SearchUser.jsx'
import GameScreen from './GameScreen.jsx'
import './App.css'

// Importing asteroid images 
// import FaCLogo from "./Images/FaCLogo.png";
// import GitHubLogo from "./Images/GitHubLogo.jpg";
// import HerokuLogo from "./Images/HerokuLogo.png";
// import ReactLogo from "./Images/ReactLogo.png";



function App() {
  const [username, setUsername] = React.useState('')
  const [score, setScore] = React.useState(0)
  const [gameRunning, toggleGameRunning] = React.useState('')

  return (  
    <div className="App" id="appRoot">
      <main>
        <SearchUser username={username} setUsername={setUsername}/>
      <div>
        <Profile name={username}/>
      </div>
      <GameScreen score={score} setScore={setScore}/>
    </main>
    </div>
  )
}


export default App
