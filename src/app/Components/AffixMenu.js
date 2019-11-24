import React from 'react'
import {connect} from "react-redux";

import {Col, Icon, Row} from "antd";
import ChangingText from "./Menus/ChangingText";
import changingTextData from "../Data/ChangingTextData";
import Search from "./Menus/Search";
import AffixMenuContainer from "./Menus/AffixMenuContainer";
import MenuButtonContent from "./Menus/MenuButtonContent";
import MenuVertical from "./Menus/MenuVertical";
import SearchFront from "./Menus/SearchFront";
import Logo from "./Menus/Logo";
import IconCollection from "./Menus/IconCollection";
import colorsData from "../Data/Static/ColorsData";

function AffixMenu(props){

    let {displaySize,categoryData,placeholder=true}=props;




    let SEARCH_TEXT="Wyszukaj";
    let SEARCH_TEXT_CATEGORY= ("name" in categoryData) ? `Wyszukaj w ${categoryData.name}` : "Wyszukaj w katalogu" ;

    let HEADER_HEIGHT=64;
    let ICON_HEIGHT=40;


    let selectedCategory=(categoryData||null)&&categoryData.slug;

    let affixMenuContainer={
        position:'fixed',
        width:'100%'
    }

    let placeholderContainer={
        position:'relative',
        width:'100%',
        height:HEADER_HEIGHT
    }


    let headerDivStyle={
        margin:'auto',
        height:HEADER_HEIGHT,
    };

    if(displaySize==="desktop")
    {
        headerDivStyle={
            ...headerDivStyle,
            width:'1100px'
        }
    }


    let spanLength;
    if(displaySize==="small"){
        spanLength={
            logoCol:8,
            searchCol:0,
            buttonsCol:16
        }
    }
    else if(displaySize==="medium"){
        spanLength={
            logoCol:15,
            searchCol:0,
            buttonsCol:9
        }
    }
    else{
        spanLength={
            logoCol:10,
            searchCol:9,
            buttonsCol:5,
        }
    }

    let logoStyle={
        float:'left',
        marginRight:5,
    }

    let changingTextDiv={
        marginLeft:'5px',
        display:'inline-block'
    };

    let searchWidth='350px';


    let iconsStyle= {
        fontSize: ICON_HEIGHT,
        marginLeft: '5px',
        marginRight: '5px'
    }

    let iconColors={
        normal:colorsData.iconsLight,
        hovered:colorsData.primaryColor3,
        clicked:colorsData.primaryColor,
        hoveredClicked:colorsData.primaryColor5
    }

    let centeringDiv={
        margin:'auto'
    };

    let iconContainer={
        height:HEADER_HEIGHT,
        width:'100%'
        };

    let centerIconContainer={
        position:'absolute',
        top:(HEADER_HEIGHT-ICON_HEIGHT)/2,
        bottom:0,
        right:5,
        margin:'auto',
    }

    let displayChangingText=!(displaySize==="small") ? null : "none";

    let iconsData=[
        {
            type:'SEARCH',
            data:{
                text:SEARCH_TEXT,
                header:SEARCH_TEXT_CATEGORY
            },
            hide:!(displaySize==="medium"||displaySize==="small")
        },
        {
            type:'SHOPPING',
            data:{},
        },
        {
            type:'USER',
            data:{},
        },
        {
            type:'MENU',
            data:{
                selectedCategory:selectedCategory
            },
        },
    ]

    let buttonSettings={
        shape:'round',
        block:true,
        size:'large',
    }

    return (
        <div>
            <AffixMenuContainer style={affixMenuContainer}>
                <Row style={headerDivStyle} type="flex" justify="start" align="middle">
                    <Col style={centeringDiv} span={spanLength.logoCol}>
                        <Logo style={logoStyle}/>

                        <div style={{float:'left',display:displayChangingText}}>
                        <ChangingText hidePosition={150} width={340} buttonSettings={buttonSettings} height={HEADER_HEIGHT} />
                        </div>

                    </Col>
                    <Col span={spanLength.searchCol} style={centeringDiv}>
                        <Search width={searchWidth} text={SEARCH_TEXT_CATEGORY} size="large" />
                    </Col>
                    <Col span={spanLength.buttonsCol}>
                    <div style={iconContainer}>
                        <div style={centerIconContainer}>
                            <IconCollection iconColors={iconColors} icons={iconsData} iconsStyle={iconsStyle} />
                        </div>
                    </div>
                    </Col>
                </Row>
            </AffixMenuContainer>
            {placeholder ?
                <div style={placeholderContainer}/>
            :""}
        </div>
    );
}

const mapStateToProps= state =>(
    {
        categoryData:state.categoryData,
        displaySize:state.displaySize,
    }
)


export default connect(mapStateToProps)(AffixMenu);