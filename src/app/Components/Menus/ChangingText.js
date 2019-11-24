import React from 'react';

import affixChangingTextData from "../../Data/Static/AffixChangingTextData"
import {useSpring,animated} from "react-spring";
import {Button} from "antd";


function ChangingText(props){

    let {width,height,hidePosition,buttonSettings}=props;
    let [hovered, setHovered] = React.useState(false);
    let timeoutMS = 12000;

    let [currentTextNumber,setCurrentTextNumber]=React.useState(0);

    function mouseEnterHandler(){
        setHovered(true);
    }

    function mouseLeaveHandler(){
        setHovered(false);
    }

    function handleClick(){
        console.log(affixChangingTextData[currentTextNumber].payload)
    }

    let componentContainer={
        position:'relative',
        height,
        width,
        overflow:'hidden',
    }

    let blockContainer={
        position:'absolute',
        height:'100%',
        width:'100%',
    }

    let [positionBlockA,setPositionBlockA,stopPositionBlockA]=useSpring(()=>({top:'0%'}))
    let [positionBlockB,setPositionBlockB,stopPositionBlockB]=useSpring(()=>({top:`-${hidePosition}%`}))
    let [animationState,setAnimationState]=React.useState(0);

    let [textBlockA,setTextBlockA]=React.useState(affixChangingTextData[currentTextNumber].text);
    let [textBlockB,setTextBlockB]=React.useState(null);


    function getNextTextNumber(){
        let nextText=currentTextNumber+1;
        return nextText===affixChangingTextData.length ? 0 : nextText;
    }


    let [initTextNumber,setInitTextNumber]=React.useState(true);

    React.useEffect(()=>{
            if (animationState === 0) {
                setTextBlockB(affixChangingTextData[getNextTextNumber(currentTextNumber)].text)
            } else if (animationState === 2) {
                setTextBlockA(affixChangingTextData[getNextTextNumber(currentTextNumber)].text)

            }

    },[currentTextNumber])


    React.useEffect(() => {
        let interval;
        let intervalExist=false;

        if(!hovered) {
            intervalExist=true;
            interval = setInterval(() => {
                setAnimationState((current)=>current===0 ? 1 : current===2 ? 3 : current)
            }, timeoutMS);
        }

        return () => {
            if(intervalExist) {
                clearInterval(interval);
            }
        }
    },[hovered]);

    let animationConfig={ mass: 1, tension: 120, friction: 14 }

    let beforePresentTransition={
        top:`-${hidePosition}%`,
        config:{
            duration:0,
        },
    }

    let presentTransition={
        top:'0%',
        config:animationConfig,
        onRest:(()=>{
            setAnimationState((current)=>current===1 ? 2 : current===3 ? 0 : current)
        })
    }

    let pastPresentTransition={
        top:`${hidePosition}%`,
        config:animationConfig,
        onRest:(()=>{})
    }

    React.useEffect(()=>{
        if(initTextNumber){
            setInitTextNumber(false);
        }
        else {
            switch (animationState) {
                case 0:
                    setCurrentTextNumber((current) => getNextTextNumber(current));
                    setPositionBlockB(beforePresentTransition);
                    break;
                case 1:
                    setPositionBlockA(pastPresentTransition);
                    setPositionBlockB(presentTransition);
                    break;
                case 2:
                    setCurrentTextNumber((current) => getNextTextNumber(current));
                    setPositionBlockA(beforePresentTransition);
                    break;
                case 3:
                    setPositionBlockA(presentTransition);
                    setPositionBlockB(pastPresentTransition);
                    break;
                default:
                    break;
            }
        }
    },[animationState])

    let eventHandlers={
        onMouseEnter:mouseEnterHandler,
        onMouseLeave:mouseLeaveHandler,
        onClick:handleClick
    }


    let buttonPosition={
        position:'absolute',
        top:0,
        bottom:0,
        height:40,
        width:'100%',
        margin:'auto'
    }

    return (
        <div
        style={componentContainer}>
            <div style={buttonPosition}>
            <animated.div style={{...blockContainer,...positionBlockA}} {...eventHandlers}>
                <Button {...buttonSettings}>
                {textBlockA}
                </Button>
            </animated.div>
            <animated.div style={{...blockContainer,...positionBlockB}} {...eventHandlers}>
                <Button {...buttonSettings}>
                {textBlockB}
                </Button>
            </animated.div>
            </div>
        </div>
    );
}



export default ChangingText;