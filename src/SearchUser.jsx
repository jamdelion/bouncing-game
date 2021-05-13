import React from "react";

function SearchUser(props) {

    return (
        <form className="search-user" onSubmit={(event) => {
            event.preventDefault();
            props.setGameStart(true)
            props.setUsername(event.target.username.value)
        }}>
            <input type="search" name="username"></input>
            <button>Submit</button>
        </form>
    );
}



export default SearchUser;