import React from "react";

function SearchUser(props) {

    return (
        <form className="search-user" onSubmit={(event) => {
            event.preventDefault();
            props.setGameStart(true)
            props.setUsername(event.target.username.value)
        }}>
            <input type="search"   aria-label="search Github Username" placeholder="Github Username" name="username"></input>
            <button><b>START</b></button>
        </form>
    );
}



export default SearchUser;