import React from 'react'
import {animated, useSpring} from "react-spring";
import colorsData from "../Data/ColorsData";

function BorderedOnHoverOrActive(props){

    let {style,active}=props;
    let [hovered,setHovered] = React.useState(false);

    let imageThumbnailContainer={
        margin:2,
        borderWidth:2,
    };

    let imageThumbnailBorder = useSpring({
        borderColor:active ? colorsData.primaryColor : hovered ? colorsData.primaryColor3  : colorsData.backgroundLight,
        borderStyle:active ? "groove" : hovered ? "groove"  : "solid",
    },);
    return(
        <animated.div style={{
            ...imageThumbnailBorder,
            ...imageThumbnailContainer,
            ...style}}
        onMouseEnter={()=>{setHovered(true)}}
        onMouseLeave={()=>{setHovered(false)}}
        >
            {props.children}
        </animated.div>
        );
}

export default BorderedOnHoverOrActive;