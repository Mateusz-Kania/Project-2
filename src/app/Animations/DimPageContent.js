import React from 'react'
import {animated, useSpring,config as reactSpringConfig} from "react-spring";
import {RemoveScroll} from "react-remove-scroll";
import {Icon} from "antd";
import colorsData from "../Data/Static/ColorsData";
import Radium from "radium"

function DimPageContent(props){
    let {show,style,pageDimColor='rgba(0,0,0,.7)',onClosePressed,animationConfig=reactSpringConfig.default,closeIconSize=32,showCloseIcon=true}=props;

    style=style||{};
    style={
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

    let affixContainer={
        background: pageDimColor,
        position:'fixed',
        top:0,
        left:0,
        width:'100%',
        height:'100%',
        zIndex:2000,
    }



    let closeIconContainer={
        display:showCloseIcon ? null : 'none',
        zIndex:2001,
        position:'absolute',
        top:-(closeIconSize*2/5),
        right:-(closeIconSize*2/5),
        lineHeight:1,
        fontSize:closeIconSize,
    }



    return(
        <div style={{display:contentExist ? null : "none"}}>
                <animated.div style={{...opacityProps,...affixContainer}}>
                    <div style={style}>
                        <div style={closeIconContainer}>
                            <Icon type="close-circle" theme="twoTone" twoToneColor={colorsData.redColor6} onClick={onClosePressed} />
                        </div>
                        <RemoveScroll enabled={show}>
                        {props.children}
                        </RemoveScroll>
                    </div>
                </animated.div>
        </div>
    )
}

export default DimPageContent;