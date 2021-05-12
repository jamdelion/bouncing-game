import React from "react";

function SearchUser(props) {
    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            props.setUsername(event.target.username.value)
        }}>
            <input type="search" name="username"></input>
            <button>Submit</button>
        </form>
    );
}

export default SearchUser;