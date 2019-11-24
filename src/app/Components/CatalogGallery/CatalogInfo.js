import React from 'react'
import colorsData from "../../Data/Static/ColorsData"

function CatalogInfo(props){

    let {name,description,style,height}=props;

    height=height||'auto';
    style=style||{};

    let container={
        backgroundColor:colorsData.backgroundLight,
        height,
        ...style
    };

    let headerStyle={
        fontSize:27,
        lineHeight:1,
        marginBottom:8
    };

    let descriptionStyle={
      fontSize:14,
      lineHeight:'22px',
    };

    return(
        <div style={container}>
            <div style={headerStyle}>
                {name}
            </div>
            <div style={descriptionStyle}>
                {description}
            </div>
        </div>
    )
}

export default CatalogInfo;