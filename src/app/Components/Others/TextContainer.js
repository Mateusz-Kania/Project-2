import React from 'react'
import { Scrollbars } from 'react-custom-scrollbars';
import {animated, useSpring} from 'react-spring'

import colorsData from "../../Data/Static/ColorsData";

const TextContainer=React.forwardRef((props,ref)=>{

    let {scroll,style,height,autoHide,autoHeightMax,autoHeightMin,trackStatus,...rest}=props;

    autoHide=autoHide||false;

    autoHeightMax=autoHeightMax||0;
    autoHeightMin=autoHeightMin||0;

    let [colorProps,setColorProps] = useSpring(()=>({backgroundColor: colorsData.primaryColor,
    borderColor:colorsData.primaryColor
    }));


    let containerStyle={
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
        height:height,
    };




    let thumbStyle = {
        borderWidth:2,
        borderRadius:5,
        borderStyle:'solid',
        cursor:'pointer',
        zIndex:900
    };


    function renderThumb() {
        return (
            <animated.div

                style={{...thumbStyle,...colorProps}}
                onMouseEnter={mouseEnterHandler}
                onMouseLeave={mouseLeaveHandler}
            />
        );
    }



    return(
        <div ref={ref} style={containerStyle}>
<Scrollbars
    autoHeight={!!autoHeightMax}
    autoHeightMin={autoHeightMin}
    autoHeightMax={autoHeightMax}
    autoHide={autoHide}
    hideTracksWhenNotNeeded={true}
    style={viewStyle }
    renderThumbVertical={renderThumb}
    {...rest}>
    <div style={{paddingRight:10}}>
    {props.children}
    </div>
</Scrollbars>
        </div>

    )
});

export default TextContainer;


