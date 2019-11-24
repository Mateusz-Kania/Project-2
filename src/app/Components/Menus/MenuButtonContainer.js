import React from 'react'
import {connect} from "react-redux";
import DimPageContent from "../../Animations/DimPageContent";
import ShowOrHideContent from "../../Animations/ShowOrHideContent";
import colorsData from "../../Data/Static/ColorsData";

//this component change his HTML DOM, so everything in it may get rerender, controlled components inside
function MenuButtonContainer(props){

    let {displaySize,onClose,show,desktopPosition={},showCloseIcon,selected,position="right"}=props;
    let animationConfig={ mass: 1, tension: 120, friction: 14,clamp:true};

    let containersSettings={
        show,
        onClosePressed:onClose,
        animationConfig,
        showCloseIcon
    }

    let containerColors={
        backgroundColor:colorsData.backgroundLight,
        color:colorsData.textColorDark,

    }


    if(displaySize==="small"||displaySize==="medium"){
        containersSettings.showCloseIcon=true;

        let contentContainer={
            padding:10,
            ...containerColors
        };

        let dimPageContentStyle={
            position:'absolute',
            margin:'auto',
            left:'50%',
            top:'50%',
            transform:`translate(-50%,-50%)`
        }


        return (
            <DimPageContent style={dimPageContentStyle} {...containersSettings}>
                <div style={contentContainer}>
                {props.children}
                </div>
            </DimPageContent>
        )
    }

    let contentContainer={
        position:'absolute',
        top:'100%',
        right:position==="right" ? 0 : null,
        left:position==="left" ? 0 : null,
        ...desktopPosition,
    };

    let boxStyle={
        position:'relative',
        boxShadow: '0 5px 15px 0 rgba(0, 0, 0, 0.2), 0 7px 35px 0 rgba(0, 0, 0, 0.19)',
        padding:'10px 20px',
        ...containerColors
    }

    return(
        <div style={contentContainer}>
            <ShowOrHideContent closeIconSize={24} zIndex={selected ? 1602 : 1600} {...containersSettings} style={boxStyle}>
                {props.children}
            </ShowOrHideContent>
        </div>
    )

}

const mapStateToProps= state =>(
    {
        displaySize:state.displaySize,
    }
)

export default connect(mapStateToProps)(MenuButtonContainer);