import React from 'react'
import FaCLogo from './Images/FaCLogo.png'

function Asteroid() {

    const [distanceFromTop, setDistanceFromTop] = React.useState(-10)
    const [speed, setSpeed] = React.useState(Math.random()*5+5)
    const [distanceFromLeft, setDistanceFromLeft] = React.useState(Math.random()*100)

    React.useEffect(() => {
        const moveInterval = setInterval(() => {
            setDistanceFromTop(distanceFromTop => distanceFromTop + speed)
        }, 1000);
        return () => clearInterval(moveInterval)
    }, [speed]);




    const mouseCollision = () => {
        setDistanceFromTop(() => -10);
        setDistanceFromLeft(() => Math.random()*100)
        setSpeed((speed) => speed+10)
    }

    return (
    <img src={FaCLogo} alt='FaC Logo' onMouseEnter={mouseCollision} className="Asteroid" style={{transform: `translate(${distanceFromLeft}vw, ${distanceFromTop}vh)`}}/>
    )
}


export default Asteroid



