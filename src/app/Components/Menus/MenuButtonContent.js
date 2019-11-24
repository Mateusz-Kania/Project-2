import React from 'react'
import {animated,useSpring} from "react-spring";
import MenuButtonContainer from "./MenuButtonContainer";
import {connect} from "react-redux";
import {isMobile} from "react-device-detect"

function MenuButtonContent(props){

    let {Icon,displaySize,clicked,onClick,onClose,iconColors,position}=props;
    let [hovered,setHovered]=React.useState(false);


    let iconColor=useSpring({color:clicked ? hovered ? iconColors.hoveredClicked : iconColors.clicked : hovered ? iconColors.hovered : iconColors.normal});

    let menuButtonContainerSettings={
        onClose,
        show:clicked||(hovered&&(displaySize==='desktop'||displaySize==="tablet")),
        showCloseIcon:!(displaySize==='desktop'||displaySize==="tablet"),
        selected:clicked,
        position,
    }
    let container={
        position:'relative',
        display:'inline-block',
        height:'100%'
    }




    return(
        <div style={container}>
        <span
            onMouseEnter={()=>{!isMobile ? setHovered(true) : ""}}
            onMouseLeave={()=>{!isMobile ? setHovered(false) : ""}}
        >
            <animated.span
                style={iconColor}
                onClick={clicked ? onClose : onClick}
            >
            {Icon}
            </animated.span>
            <MenuButtonContainer {...menuButtonContainerSettings}>
                    {props.children}
            </MenuButtonContainer>
        </span>
        </div>
    )
}

const mapStateToProps= state =>(
    {
        displaySize:state.displaySize,
    }
)

export default connect(mapStateToProps)(MenuButtonContent);
