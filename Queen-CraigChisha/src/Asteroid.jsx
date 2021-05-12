import React from 'react'

function Asteroid() {

    const [distanceFromTop, setDistanceFromTop] = React.useState(0)

    React.useEffect(() => {
        const moveInterval = setInterval(() => {
            setDistanceFromTop(distanceFromTop => distanceFromTop + 1)
        }, 50);
        return () => clearInterval(moveInterval)
    }, []);

    //asteroid appears as a div
    //asteroid dropping down - Need a function to delete the div itself
    //asteroid droppig randomly 
    //asteroid disappearing if touches gound/ after ?? seconds 
    //asteroid disappearing if touches user

    const mouseCollision = (event) => event.target.remove();

    return (

        <div onMouseEnter={mouseCollision} className="Asteroid" style={{transform: 'translateY(' + distanceFromTop + 'px)'}}>

        </div>
    )
}

export default Asteroid



