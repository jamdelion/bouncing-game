import React from 'react'

function Asteroid() {

    const [astLocation, setAstLocation] = React.useState(null)

    function createAsteroid() {
        
    }

    //asteroid appears as a div
    //asteroid dropping down - Need a function to delete the div itself
    //asteroid droppig randomly 
    //asteroid disappearing if touches gound/ after ?? seconds 
    //asteroid disappearing if touches user

    const mouseCollision = (event) => event.target.remove();

    return (
        
        <div onMouseEnter={mouseCollision} className="Asteroid">

        </div>
    )
}

export default Asteroid



