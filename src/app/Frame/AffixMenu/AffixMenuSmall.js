import React from 'react';
import {connect} from 'react-redux';
import IconSet from '../FrameComponents/IconSet'
import {Affix, Col, Row} from "antd";
import ChangingText from '../FrameComponents/ChangingText'
import changingTextData from '../../Data/ChangingTextData'
import BasketIcon from "../FrameComponents/Icons/BasketIcon";
import AccountIcon from "../FrameComponents/Icons/AccountIcon";
import MenuVertical from "../FrameComponents/Icons/MenuVertical";
import categoriesData from "../../Data/CategoriesData";
import colorData from "../../Data/ColorsData";
import SearchIcon from "../FrameComponents/Icons/SearchIcon";
import HoverAnimation from "../../Animations/HoverAnimation";

function AffixMenuSmall(props){



    let centeringDiv={
        margin:'auto'
    };

    let alignRightDiv={
        textAlign:'right'
    };

    let headerDivStyle={
        backgroundColor:colorData.backgroundDark,
        color:"white",
        margin:'auto',
        height:'64px',
        zIndex:100
    };


    let logoDiv={
        float:'left',
        width:'30px'
    };
    let changingTextDiv={
        float:'left',
        marginLeft:'3px',
        width:'150px'
    };




    return (
        <Row style={headerDivStyle} type="flex" justify="start" align="middle">
            <Col style={centeringDiv} span={8}>
                <div style={logoDiv}>LOGO
                </div>


            </Col>
            <Col style={alignRightDiv} span={16}>
                <span className="iconsLight">
                <IconSet>
                            <HoverAnimation color={colorData.backgroundLight} colorOnHover={colorData.primaryColor}>
                                <SearchIcon size="medium" />
                            </HoverAnimation>
                            <HoverAnimation color={colorData.backgroundLight} colorOnHover={colorData.primaryColor}>
                                <BasketIcon size={"medium"}/>
                            </HoverAnimation>
                            <HoverAnimation color={colorData.backgroundLight} colorOnHover={colorData.primaryColor}>
                                <AccountIcon size={"medium"}/>
                            </HoverAnimation>
                            <HoverAnimation color={colorData.backgroundLight} colorOnHover={colorData.primaryColor}>
                                <MenuVertical categoriesData={categoriesData} size={"medium"}/>
                            </HoverAnimation>
                </IconSet>
                </span>
            </Col>
        </Row>
    );
}


const mapStateToProps= state=>(
    {
        displaySize:state.displaySize,
        basketItemsCount:state.basketItemsCount,
    }
);

export default connect(mapStateToProps)(AffixMenuSmall);