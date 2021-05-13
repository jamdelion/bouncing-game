import React, { useState } from 'react'
import ReactDOM from 'react-dom';
import Profile from './Profile.jsx'
import SearchUser from './SearchUser.jsx'
import GameScreen from './GameScreen.jsx'
import './App.css'

function App() {
  const [username, setUsername] = React.useState('')
  // const [gameRunning, toggleGameRunning] = React.useState('')

  return (  
    <div className="App" id="appRoot">
      <main>
        <SearchUser username={username} setUsername={setUsername}/>
      <div>
        <Profile name={username}/>
      </div>
      <GameScreen />
    </main>
    </div>
  )
}


export default App
