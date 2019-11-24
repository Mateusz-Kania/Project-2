import React from 'react'
import CardBlock from "./CardBlock";
import {Icon} from "antd";
import colorsData from "../../../Data/Static/ColorsData";
import Dotdotdot from 'react-dotdotdot'
import {useSpring,animated} from 'react-spring'
import {generateTextForNameAndAllOptions} from "../../../Utilities/generateFilterText";

let CategoryCard=(props)=>{

    let {item,style,initialZIndex,scale=1} = props;

    let width=185*scale;
    let height=285*scale;

    let iconDivHeight=130*scale;
    let iconDivBorder=10*scale;
    let titleFontSize=(item.type==="category" ? 20 : 14)*scale;
    let titleHeight=(item.type==="category" ? 20 : 28)*scale;
    let titleTextMargin=5*scale;
    let textContainerHeight=90*scale-titleHeight;
    let bottomTextHeight=20*scale;
    let bottomTextMargin=10*scale;

    let [expand,setExpand]=React.useState(false);

    let textBoxRef=React.useRef(null);
    let [textBoxExpand,setTextBoxExpand]=React.useState(false);

    let getTextBoxExpandBreakpoint=()=>{
        let height=textBoxRef.current.clientHeight;
        let breakpoint = height-textContainerHeight;
        return breakpoint>0 ? -breakpoint : 0;
    }

    let textBoxMove=useSpring({
        top:textBoxExpand? getTextBoxExpandBreakpoint():0,
        onRest:()=>{
            if(expand) {
                setTextBoxExpand((current) => !current)
            }
        },
        config:{
            mass:700,
            tension:250,
            friction:400,
            clamp:true,
        }
    });

    let mainFilter=item.type==="category" ? null : item.queryFilters.hasOwnProperty("SEARCH_VALUE") ? "SEARCH_VALUE" :
        item.queryFilters.hasOwnProperty("CATEGORY") ? "CATEGORY" : null;

    let title=item.type==="category" ? item.name : mainFilter==="SEARCH_VALUE" ? `Wyszukiwanie "${item.queryFilters.SEARCH_VALUE.options[0].value}" ` :
        mainFilter==="CATEGORY" ? `Wyszukiwanie w ${item.queryFilters.CATEGORY.options[0].name}` : `Wyszukiwanie`;

    let icon = item.type==="category" ? "folder-open" : "search";

    let description=item.type==="category" ? <span>{item.description}</span> : <span>
        {Object.keys(item.queryFilters).map((key)=>(
            <span key={key}>{generateTextForNameAndAllOptions(item.queryFilters[key])}<br/></span>
            ))}
    </span>;

    React.useEffect(()=>{
        if(!expand){
            setTextBoxExpand(false);
        }
        else{
            setTextBoxExpand(true);
        }

    },[expand])


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
        height:titleHeight,
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
        padding:'0px 5px',
        overflow:'hidden',
        textOverflow: 'ellipsis',
    }
    let bottomTextStyle={
        height:bottomTextHeight,
        marginTop:bottomTextMargin,
        color:colorsData.primaryColor,
        fontSize:bottomTextHeight,
        lineHeight:1,
        textAlign:'center',
        padding:'0px 5px'
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
            expand={expand}
            onExpandChange={setExpand}
        >
            <div style={iconDivStyle}>
                <Icon type={icon} />
            </div>
            <div style={titleStyle}>
                {title}
            </div>
            <div style={textStyle}>
                    <animated.div style={{...textBoxMove,position:'relative'}} ref={textBoxRef}>
                        {description}
                    </animated.div>
            </div>
            <div style={bottomTextStyle}>
                Zobacz przedmioty
            </div>
        </CardBlock>
    )
}

export default CategoryCard;