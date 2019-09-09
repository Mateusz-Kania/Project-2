import React from 'react'
import {animated, useSpring} from 'react-spring'

function HoverAnimation(props){
    let {color,colorOnHover} = props;
    let [colorProps,setColorProps] = useSpring(()=>({color: color}));

    function mouseEnterHandler(){
        setColorProps({color:colorOnHover});
    }

    function mouseLeaveHandler(){
        setColorProps({color:color});
    }

    return(
        <animated.span
            style={colorProps}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
        >
            {props.children}
        </animated.span>
    )


}

export default HoverAnimation;