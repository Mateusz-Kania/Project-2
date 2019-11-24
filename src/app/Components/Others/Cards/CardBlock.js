import React from 'react'
import {animated, useSpring} from "react-spring";
import colorsData from "../../../Data/Static/ColorsData";
import {isMobile} from "react-device-detect";
import {Icon} from "antd";

let CardBlock = (props)=>{

    let {width,height,style={},initialZIndex=0,hoverRightExist=false,expand,onExpandChange=()=>{},closeButton=false,onClosePressed}=props;

    let [internalExpand,setInternalExpand]=React.useState(expand||false)

    let expandChangeHandler;

    if(expand!==undefined){
        expandChangeHandler=(val)=>{
            onExpandChange(val);
        }
    }
    else{

        expandChangeHandler=(val)=>{
            setInternalExpand(val);
            onExpandChange(val);
        }
    }

    React.useEffect(()=>{
        if(expand!==undefined){
            setInternalExpand(expand);
        }
    },[expand])

    let colorProps = useSpring({backgroundColor:internalExpand ? colorsData.primaryColor3 : colorsData.backgroundLight});



    let [zIndexState,setZIndexState]=React.useState(false);

    let polaroidStyle={
        position:'relative',
        cursor:'pointer',
        width:width,
        height:height,
        boxShadow: '0 3px 6px 0 rgba(0, 0, 0, 0.2), 0 4px 15px 0 rgba(0, 0, 0, 0.19)',
        overflow: 'visible',
        ...style
    };


    let mainContent={
        position:'absolute',
        height:'100%',
        left:0,
        right:0,
        zIndex:internalExpand ? 5+initialZIndex : zIndexState ? 3+initialZIndex : 1+initialZIndex,

    };


    let otherVersionsContainer={
        position:'relative',
        zIndex:internalExpand ? 4+initialZIndex :zIndexState ? 2+initialZIndex : initialZIndex,
    };


    let otherVersionsStart={
        position:'absolute',
        top:0,
        right:0,
    };

    let otherVersionContainerPosition = useSpring({
        config:{
            mass:1,
            tension:100,
            friction:18,
        },
        onRest:()=>{
            if(!internalExpand) {
                setZIndexState(false);
            }
        },
        left:internalExpand ? '100%' : '0%'});

    let mouseEnterLeave={

    }
    if(!isMobile){
        mouseEnterLeave={
            onMouseEnter:()=>{expandChangeHandler(true)},
            onMouseLeave:()=>{expandChangeHandler(false)},
        }
    }

    let closeIconSize=32;

    let closeIconContainer={
        zIndex:2001,
        position:'absolute',
        top:-(closeIconSize*2/5),
        right:-(closeIconSize*2/5),
        lineHeight:1,
        fontSize:closeIconSize,
    }



    return(
        <animated.div style={{...polaroidStyle,...colorProps}}
                      {...mouseEnterLeave}
        >
            <animated.div style={{...mainContent,...colorProps}}
            >
                {closeButton?
                <div style={closeIconContainer}>
                    <Icon type="close-circle" theme="twoTone" twoToneColor={colorsData.redColor6} onClick={onClosePressed} />
                </div>
                :null}
                {props.children}
            </animated.div>


            {   hoverRightExist ?
                <div style={otherVersionsStart}>
                    <animated.div style={{...otherVersionsContainer, ...otherVersionContainerPosition}}>
                        {props.hoverRight}
                    </animated.div>
                </div>
                :""
            }
        </animated.div>
    )

}

export default CardBlock;