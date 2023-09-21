import { Card, CardImg, CardBody, CardText, CardTitle } from 'reactstrap';
import { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring'; 

const AnimatedDisplayCard = ({ item }) => {
    const { image, name, description } = item;
    const [toggle, setToggle] = useState(false);

    //declare useSpring object and pass properties to animate the display card
    const animatedStyle = useSpring({
        opacity: toggle ? 1 : 0,
        transform: toggle ? 'scale(1,1)' : 'scale(1,0)',
        config: { duration: 600 }
    })

    //set state of animated card and run once upon component mount
    useEffect(() => {
        setToggle(true);
    }, [])
    
    return (
        //parent wrapper animates card
        <animated.div style={animatedStyle}>
            <Card>
                <CardImg src={image} alt={name} />
                <CardBody>
                    <CardTitle>{name}</CardTitle>
                    <CardText>{description}</CardText>
                </CardBody>
            </Card>
        </animated.div>
    )
}

export default AnimatedDisplayCard;