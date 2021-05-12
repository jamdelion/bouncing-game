import React from "react";

const USER_URL = "https://api.github.com/users/";

function Profile(props) {
    const [profileData, setProfileData] = React.useState()

    React.useEffect(() => {
        fetch(USER_URL + props.name)
          .then((res) => res.json())
          .then((data) => setProfileData(data));
      }, [props.name]);
    
      if (!profileData) {
        return <div>Loading...</div>;
      } else {
        return (
        <div>
            <h2>Hi, {profileData.login}!</h2>
            <img src={profileData.avatar_url} />
        </div>
        );
      }
}

export default Profile