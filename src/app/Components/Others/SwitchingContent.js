import React from 'react'

import {animated,useSpring,config as animationConfigPresets} from "react-spring";


let ItemContainer=(props)=> {
    let itemHeightRef=React.useRef(null);

    React.useEffect(()=>{
        if(props.showedKey===props.itemKey){
            if(itemHeightRef&&itemHeightRef.current) {
                props.handleHeightChange(itemHeightRef.current.clientHeight)
            }
        }
    },[props.showedKey,itemHeightRef])

    return(
        <div ref={itemHeightRef}>{props.children}</div>
    )}

let ItemContainerEco=(props)=><span>{props.children}</span>

function SwitchingContent(props){

    let {heightAnimation=false,items,activeKey,animationConfig={...animationConfigPresets.gentle,clamp:true}}=props;
    let [show,setShow]=React.useState(!!items[activeKey]);
    let [hided,setHided]=React.useState(!items[activeKey]);
    let [showedKey,setShowedKey]=React.useState(activeKey);
    let [resizeIndex,setResizeIndex]=React.useState(false);



    React.useEffect(()=>{
     let resizeHandle=()=>{
         setResizeIndex((resizeIndex)=>!resizeIndex)
     }

     window.addEventListener("resize",resizeHandle);
     return(()=>{
         window.removeEventListener("resize",resizeHandle);
     })

    })


    let opacity=useSpring({
            opacity:show?1:0,
            onRest:(current)=>{
                if(!current.opacity){
                    setHided(true);
                }
            },
            config:animationConfig
        })

    React.useEffect(()=>{
        if(items[activeKey]&&hided){
            setShow(true);
            setShowedKey(activeKey);
            setHided(false);
        }
    },[hided,activeKey])

    React.useEffect(()=>{
        if(activeKey!==showedKey){
            setShow(false);
        }
    },[activeKey]);


    let [elementHeight,setElementHeight]=React.useState(0);
    let [initialState,setInitialState]=React.useState(true);

    let animatedHeight;

    let ItemContainerUsed;

    if(!heightAnimation){
        animatedHeight={};
        ItemContainerUsed=ItemContainerEco;
    }
    else{
        ItemContainerUsed=ItemContainer;
        let initialAnimation={
            duration:1,
        };

        animatedHeight=useSpring({
            height:elementHeight,
            config:initialState ? initialAnimation : animationConfig,
            onRest:()=>{
                if(initialState){
                    setInitialState(false);
                }
            }
        });



    }


    let heightChange=(newHeight)=>{
        setElementHeight(newHeight);
    }

    return(

        <animated.div style={{...opacity,...animatedHeight}}>
            {
                Object.keys(items).map((key)=>
                    <div key={key} style={{display:key===showedKey?null:'none'}}>
                        <ItemContainerUsed handleHeightChange={heightChange} showedKey={showedKey} itemKey={key}>
                            {items[key]}
                        </ItemContainerUsed>
                    </div>
                )

            }
        </animated.div>
    )
}

export default SwitchingContent;
/*

 */