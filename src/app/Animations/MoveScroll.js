import React from 'react'
import {useSpring,config as reactSpringConfig} from "react-spring";

function MoveScroll(props, ref){

    let {style}=props;

    style=style||{};

    let divStyle={
        position:'absolute',
        top:0,
        left:0,
        ...style
    };

    let [scrollHook,setScrollHook,stopScrollHook]= useSpring(()=>({y:0,x:0}));
    let containerRef=React.useRef(null);

    let currentState={
        running:false
    };

    function moveScroll(type="both",top=0,left=0,config=null,ref=null){
        let startYPosition=window.scrollY;
        let startXPosition=window.scrollX;
        if(!ref){
            ref=containerRef;
        }


        if(!config){
            config=reactSpringConfig.default;
        }

        let scrollState={
            running:true
        }
        currentState.running=false;
        currentState=scrollState;


        let yMovement;
        let xMovement;

        if(type==="vertical"){
            yMovement=true;
            xMovement=false;
        }
        else if(type==="horizontal"){
            yMovement=false;
            xMovement=true;
        }
        else if(type==="both"){
            yMovement=true;
            xMovement=true;
        }
        else{
            console.log("Invalid scroll animation type. Valid types are: both,vertical or horizontal.");
        }

        setScrollHook({
            to:[
                {
                    immediate:false,
                    y:startYPosition,
                    x:startXPosition,
                    config:{duration:1},//reason is react-spring sometimes bug when duration is 0 (x or y values is NaN, when it does not change here)
                },
                {
                    immediate: false,
                    y: yMovement ? getPositionY(ref)+top : startYPosition,
                    x: xMovement ? getPositionX(ref)+left : startXPosition,
                    onFrame: props => {
                        console.log(3,scrollState,currentState);
                        if(scrollState.running) {
                            window.scroll(props.x, props.y);
                        }
                    },
                    config
                }]
        })
    }



    React.useImperativeHandle(ref, () => ({
        moveScroll,
    }));

    return(
        <div ref={containerRef} style={divStyle}/>
    )
}

function getPositionY(ref){
    if(ref==="window"){
        return 0;
    }
    return window.scrollY + ((ref && ref.current.getBoundingClientRect().top) || 0);
}


function getPositionX(ref){
    if(ref==="window"){
        return 0;
    }
    return window.scrollX + ((ref && ref.current.getBoundingClientRect().left) || 0);
}

export default React.forwardRef(MoveScroll);