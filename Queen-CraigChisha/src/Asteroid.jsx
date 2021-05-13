import React from 'react'
import FaCLogo from './Images/FaCLogo.png'


function Asteroid() {
    const [distanceFromTop, setDistanceFromTop] = React.useState(0)

    React.useEffect(() => {
        const moveInterval = setInterval(() => {
            setDistanceFromTop(distanceFromTop => distanceFromTop + 1)
        }, 50);
        return () => clearInterval(moveInterval)
    }, []);

    const mouseCollision = (event) => event.target.remove();
    return (
    <img src={FaCLogo} alt='FaC Logo' onMouseEnter={mouseCollision} className="Asteroid" style={{transform: 'translateY(' + distanceFromTop + 'px)'}}/>
    )
}


export default Asteroid



