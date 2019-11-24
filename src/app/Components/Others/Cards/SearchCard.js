import React from 'react'
import CardBlock from "./CardBlock";
import {Icon} from "antd";
import colorsData from "../../../Data/Static/ColorsData";

let SearchCard=(props)=>{

    let {item,style,initialZIndex,scale=1} = props;

    let width=185*scale;
    let height=285*scale;

    let iconDivHeight=130*scale;
    let iconDivBorder=10*scale;
    let titleFontSize=20*scale;
    let titleTextMargin=5*scale;
    let textContainerHeight=70*scale;
    let bottomTextHeight=20*scale;
    let bottomTextMargin=10*scale;

    let iconDivWidth = (width-(iconDivBorder*2));
    let iconDivStyle={
        width:iconDivWidth,
        marginTop:iconDivBorder,
        marginLeft:'auto',
        marginRight:'auto',
        height:iconDivHeight,
        textAlign:'center',
        fontSize:100
    };
    let titleStyle={
        height:titleFontSize,
        marginTop:iconDivBorder,
        color:colorsData.primaryColor,
        fontSize:titleFontSize,
        lineHeight:1,
        textAlign:'center',
        padding:'0px 5px'
    };
    let textStyle={
        height:textContainerHeight,
        marginTop:titleTextMargin,
        textAlign:'center',
        padding:'0px 5px'
    }
    let bottomTextStyle={
        height:bottomTextHeight,
        marginTop:bottomTextMargin,
        color:colorsData.primaryColor,
        fontSize:bottomTextHeight,
        lineHeight:1,
        textAlign:'center',
        padding:'0px 5px',
    }

    return(
        <CardBlock
            width={width}
            height={height}
            style={style}
            initialZIndex={initialZIndex}
            hoverRightExist={true}
            closeButton={item.closeButton}
            onClosePressed={item.onClosePressed}
        >
            <div style={iconDivStyle}>
                <Icon type="search" />
            </div>
            <div style={titleStyle}>
                Title
            </div>
            <div style={textStyle}>
                Text
            </div>
            <div style={bottomTextStyle}>
                Item
            </div>
        </CardBlock>
    )
}

export default SearchCard;