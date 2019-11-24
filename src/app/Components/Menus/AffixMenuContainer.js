import React from 'react'
import colorData from "../../Data/Static/ColorsData";

function AffixMenuContainer(props) {

    let {style}=props;

    let fullWidthStyle={
        backgroundColor:colorData.backgroundDark,
        color:"white",
        zIndex:1500,
        ...style
    };

    return(
        <div style={fullWidthStyle}>
            {props.children}
        </div>
    )

}

export default AffixMenuContainer