import React from 'react'
import {Affix, Col, Icon, Layout, Row} from "antd";
import LinkCollection from "./Menus/LinkCollection";
import AboutUsLinksData from "../Data/AboutUsLinksData";
import Search from "./Menus/Search";
import HoverAnimation from "../Animations/HoverAnimation";
import colorsData from "../Data/Static/ColorsData";
import StandardPageContainer from "./Layout/StandardPageContainer";
import {connect} from "react-redux";
import MenuButtonContent from "./Menus/MenuButtonContent";
import MenuVertical from "./Menus/MenuVertical";
import IconCollection from "./Menus/IconCollection";
import ChangingText from "./Menus/ChangingText";
import MenuHorizontal from "./Menus/MenuHorizontal";
import AffixMenu from "./AffixMenu";
import {animated,useSpring,config as animationConfig} from 'react-spring'

function LPMenu(props){


    let {displaySize,categoryData}=props;

    let SEARCH_TEXT= ("name" in categoryData) ? `Wyszukaj w ${categoryData.name}` : "Wyszukaj w katalogu" ;

    let colSpanSettings;
    if(displaySize==="small"){
        colSpanSettings={
            linkCollection:24,
            iconsTop:24,
            logo:24,
            search:24,
            image:0,
            iconsBottom:0
        }
    }
    else if(displaySize==="medium"){
        colSpanSettings={
            linkCollection:12,
            iconsTop:12,
            logo:24,
            search:24,
            image:0,
            iconsBottom:0
        }
    }
    else{
        colSpanSettings={
            linkCollection:12,
            iconsTop:12,
            logo:8,
            search:8,
            image:8,
            iconsBottom:24
        }

    }

    let topRowContainer={
        backgroundColor:colorsData.background
    }
    let topRowStyle={
        paddingLeft:50,
        paddingRight:50,
        paddingTop:'4px',
        paddingBottom:'2px',
    };

    let iconsData=[
        {
            type:'SHOPPING',
            data:{},
        },
        {
            type:'USER',
            data:{},
        },
        {
            type:'CATALOG_INTRO',
            data:{},
        },
    ]

    let iconsStyle={
            fontSize: 48,
            marginLeft: '5px',
            marginRight: '5px'
    }

    let iconColors={
        normal:displaySize==="small"||displaySize==="medium" ? colorsData.backgroundDark : colorsData.iconsLight,
        hovered:displaySize==="small"||displaySize==="medium" ? colorsData.backgroundDark : colorsData.primaryColor3,
        clicked:colorsData.primaryColor,
        hoveredClicked:displaySize==="small"||displaySize==="medium" ? colorsData.primaryColor : colorsData.primaryColor5
    }

    let backgroundHeight={
        topRow:22,
        middleRow:displaySize==="small" ? 120 : displaySize==="medium" ?  98 : 130,
        bottomRow:displaySize==="small"||displaySize==="medium" ? 60 : 64,
    };

    let linkCollectionPosition={
        position:'absolute',
        top:0,
        left:0,
    };

    let centerAbsoluteDiv={
        left:0,
        right:0,
        marginLeft:'auto',
        marginRight:'auto',

    }

    let iconCollectionPosition;
    let searchPosition;
    let logoPosition;
    let linkCollectionRightPosition;
    let changingTextPosition;
    let horizontalMenu;
    if(displaySize==="small"){

        iconCollectionPosition={
            position:'absolute',
            top:24,
            right:0,
        };

        searchPosition={
            position:'absolute',
            top:152,
            width:340,
            ...centerAbsoluteDiv,
        };
        logoPosition={
            position:'absolute',
            top:77,
            width:250,
            height:50,
            ...centerAbsoluteDiv,
        }
        linkCollectionRightPosition={
            display:'none',
        }
        changingTextPosition={
            display:'none',
        }
        horizontalMenu={
            display:'none',
        }
    }
    else if(displaySize==="medium"){
        iconCollectionPosition={
            position:'absolute',
            top:0,
            right:0,
        };
        searchPosition={
            position:'absolute',
            top:130,
            width:340,
            ...centerAbsoluteDiv,
        };
        logoPosition={
            position:'absolute',
            top:55,
            width:250,
            height:50,
            ...centerAbsoluteDiv,
        }
        linkCollectionRightPosition={
            display:'none',
        }
        changingTextPosition={
            display:'none',
        }
        horizontalMenu={
            display:'none',
        }
    }
    else{
        iconCollectionPosition={
            position:'absolute',
            top:160,
            height:56,
            right:0,
        };
        searchPosition={
            position:'absolute',
            top:67,
            width:340,
            ...centerAbsoluteDiv,
        };
        logoPosition={
            position:'absolute',
            top:52,
            left:0,
            width:350,
            height:70,
        }
        linkCollectionRightPosition={
            position:'absolute',
            top:0,
            right:0,
        }
        changingTextPosition={
            position:'absolute',
            top:22,
            height:130,
            right:10,
            width:300
        }
        horizontalMenu={
            position:'absolute',
            left:0,
            top:152,
            height:64,
        }
    }



    let buttonSettings={
        block:true,
        size:'large',
    }

    let [affixBreakpoint,setAffixBreakPoint]=React.useState(216);
    let [affixShow,setAffixShow]=React.useState(false);

    function checkAffix(){
        setAffixShow(window.scrollY>=affixBreakpoint);
        //to moznaby zooptymalizowac, jak bd lagi
    }


    React.useEffect(()=>{
        checkAffix();
    },[affixBreakpoint]);

    React.useEffect(()=>{
        window.addEventListener("scroll",checkAffix);
        return (()=>{window.removeEventListener("scroll",checkAffix)})
    },[])

    React.useEffect(()=>{
        if(displaySize==="small"){
            setAffixBreakPoint(202);
        }
        else if(displaySize==="medium"){
            setAffixBreakPoint(180);
        }
        else{
            setAffixBreakPoint(216);
        }
    },[displaySize])

    let affixMenuPosition=useSpring({
        position:'relative',
        top:affixShow ? 0 : -64,
        config:{
            mass:1,
            tension:120,
            friction:14,
            clamp:true,
        }
    })

    return(
        <div style={{position:'relative'}}>
            <animated.div style={affixMenuPosition}>
            <AffixMenu placeholder={false} />
            </animated.div>
            <div>
                <div style={{height:backgroundHeight.topRow,backgroundColor:colorsData.background}}/>
                <div style={{height:backgroundHeight.middleRow,backgroundColor:colorsData.backgroundLight}}/>
                <div style={{height:backgroundHeight.bottomRow,backgroundColor:colorsData.backgroundDark}}/>
            </div>
        <div style={{position:'absolute',top:0,left:0,height:'100%',width:'100%'}}>
            <StandardPageContainer width={1100}>
                <div style={linkCollectionPosition}>
                    <LinkCollection side={displaySize==="tablet"||displaySize==="desktop" ? 'left' : null} />
                </div>
                <div style={linkCollectionRightPosition}>
                    <LinkCollection side='right' />
                </div>
                <div style={iconCollectionPosition}>
                    <IconCollection iconColors={iconColors} icons={iconsData} iconsStyle={iconsStyle} />
                </div>
                <div style={searchPosition}>
                    <Search width={340} size="large" text={SEARCH_TEXT}/>
                </div>
                <div style={logoPosition}>
                    LOGO
                </div>
                <div style={changingTextPosition}>
                    <ChangingText hidePosition={220} width={300} buttonSettings={buttonSettings} height={130} />
                </div>
                <div style={horizontalMenu}>
                    <MenuHorizontal height={64} />
                </div>

            </StandardPageContainer>
        </div>


        </div>
    )
}

const mapStateToProps= state=>(
    {
        categoryData:state.categoryData,
        displaySize:state.displaySize,
    }
);

export default connect(mapStateToProps)(LPMenu);