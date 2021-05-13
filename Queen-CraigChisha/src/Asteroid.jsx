import React from 'react'

function Asteroid() {

    const [distanceFromTop, setDistanceFromTop] = React.useState(-10)
    const [speed, setSpeed] = React.useState(Math.random()*5+5)

    React.useEffect(() => {
        const moveInterval = setInterval(() => {
            setDistanceFromTop(distanceFromTop => distanceFromTop + speed)
        }, 1000);
        return () => clearInterval(moveInterval)
    }, [speed]);

    const [distanceFromLeft, setDistanceFromLeft] = React.useState(Math.random()*100)


    //asteroid appears as a div
    //asteroid dropping down - Need a function to delete the div itself
    //asteroid droppig randomly 
    //asteroid disappearing if touches gound/ after ?? seconds 
    //asteroid disappearing if touches user

    const mouseCollision = () => {
        setDistanceFromTop(() => -10);
        setDistanceFromLeft(() => Math.random()*100)
        setSpeed((speed) => speed+10)
    }

    return (
        <div onMouseEnter={mouseCollision} className="Asteroid" style={{transform: `translate(${distanceFromLeft}vw,${distanceFromTop}vh)`}}>
        </div>
    )
}

export default Asteroid



