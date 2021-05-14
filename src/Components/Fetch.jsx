import React from 'react'
import { Asteroid } from './Asteroid.jsx'
//API grabbing github users
const USER_URL = "https://api.github.com/users/";

export default function Fetch({setScore, name, profileData, setProfileData, gameStart}) {
//Update upon game start of user name change
    React.useEffect(() => {
        fetch(USER_URL + name)
          .then((res) => res.json())
          .then((data) => setProfileData(data));
      }, [gameStart]);
      
      const asteroids = Array.from({length:10}, () => <Asteroid setScore={setScore} name={name} profileData={profileData} image={profileData.avatar_url}/>)
      
      return (
          <div>
          {asteroids}
          </div>
      )
}