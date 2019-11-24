import React from 'react'
import {animated, useSpring,config as reactSpringConfig} from "react-spring";
import {Icon} from "antd";
import colorsData from "../Data/Static/ColorsData";

function ShowOrHideContent(props){
    let {show,style,onClosePressed,animationConfig=reactSpringConfig.default,closeIconSize=32,showCloseIcon=true,zIndex=1600}=props;

    style=style||{};
    style={
        zIndex,
        ...style
    }

    let [contentExist,setContentExist]=React.useState(show);

    let opacityProps=useSpring({
        opacity:show?1:0,
        onStart:()=>{
            if(show) {
                setContentExist(true)
            }
        },
        onRest:(props)=>{
            if(!props.opacity) {
                setContentExist(false)
            }
        },
        config:animationConfig});




    let closeIconContainer={
        display:showCloseIcon ? null : 'none',
        zIndex:zIndex+1,
        position:'absolute',
        top:-(closeIconSize*2/5),
        right:-(closeIconSize*2/5),
        lineHeight:1,
        fontSize:closeIconSize,
    }


    return(
        <div style={{display:contentExist ? null : "none"}}>
            <animated.div style={opacityProps}>
                <div style={style}>
                    <div style={closeIconContainer}>
                        <Icon type="close-circle" theme="twoTone" twoToneColor={colorsData.redColor6} onClick={onClosePressed} />
                    </div>
                    {props.children}
                </div>
            </animated.div>
        </div>
    )
}

export default ShowOrHideContent;