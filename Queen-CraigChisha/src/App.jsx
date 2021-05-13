import React, { useState } from 'react'
import ReactDOM from 'react-dom';
import Profile from './Profile.jsx'
import SearchUser from './SearchUser.jsx'
import Asteroid from './Asteroid.jsx'
import './App.css'

// Importing asteroid images 
// import FaCLogo from "./Images/FaCLogo.png";
// import GitHubLogo from "./Images/GitHubLogo.jpg";
// import HerokuLogo from "./Images/HerokuLogo.png";
// import ReactLogo from "./Images/ReactLogo.png";



function App() {
  const [username, setUsername] = React.useState('')
  const [gameRunning, toggleGameRunning] = React.useState('')
  const [health, setHealth] = useState(3)


  function asteroidCreate() {
    setInterval(ReactDOM.render(<Asteroid/>, document.getElementById('appRoot')), 1000);
  }
  return (  
    <div className="App" id="appRoot">
      <main>
        <SearchUser username={username} setUsername={setUsername}/>
      <div>
        <Profile name={username}/>
      </div>
      <Asteroid />
    </main>
    </div>
  )
}


export default App
