import React from 'react'
import { Scrollbars } from 'react-custom-scrollbars';
import {animated, useSpring} from 'react-spring'

import colorsData from "../../Data/ColorsData";

function TextContainer(props){

    let {scroll,style,height}=props;

    let [colorProps,setColorProps] = useSpring(()=>({backgroundColor: colorsData.primaryColor,
    borderColor:colorsData.primaryColor
    }));


    let containerStyle={
        backgroundColor:colorsData.backgroundLight,
        ...style
    }

    if(!scroll){
        return (
          <div style={containerStyle}>
              {props.children}
          </div>

        );
    }

    function mouseEnterHandler(){
        setColorProps({backgroundColor:colorsData.primaryColor5,
            borderColor:colorsData.primaryColor5});
    }

    function mouseLeaveHandler(){
        setColorProps({backgroundColor:colorsData.primaryColor,
            borderColor:colorsData.primaryColor});
    }

/*
    return(
      <div className="textContainerProduct" style={style}>
          {props.children}
      </div>

    );


            <HoverAnimation>
            <div
                style={thumbStyle}/>
            </HoverAnimation>
 */

    let viewStyle = {
        height,
    };




    let borderStyle = {
        borderWidth:2,
        borderRadius:5,
        borderStyle:'solid',
        cursor:'pointer',
    };


    function renderThumb() {
        return (
            <animated.div

                style={{...borderStyle,...colorProps}}
                onMouseEnter={mouseEnterHandler}
                onMouseLeave={mouseLeaveHandler}
            />
        );
    }


    return(
        <div style={containerStyle}>
<Scrollbars
    hideTracksWhenNotNeeded={true}
    style={viewStyle }
    renderThumbVertical={renderThumb}>
    {props.children}

</Scrollbars>
        </div>

    )
}

export default TextContainer;


