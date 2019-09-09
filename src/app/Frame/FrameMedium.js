import React from 'react';
import {Affix, Col, Layout, Row} from "antd";
const {  Content, Footer } = Layout;
import AboutUsLinksData from "../Data/AboutUsLinksData";
import categoriesData from "../Data/CategoriesData";
import LinkCollection from "./FrameComponents/LinkCollection";
import Search from './FrameComponents/Search'
import IconCollection from "./FrameComponents/IconSet";
import {connect} from "react-redux";
import colorData from '../Data/ColorsData'
import WebsiteFooter from "./FrameComponents/WebsiteFooter";
import BasketIcon from "./FrameComponents/Icons/BasketIcon"
import MenuVertical from "./FrameComponents/Icons/MenuVertical"
import AccountIcon from "./FrameComponents/Icons/AccountIcon"
import AffixMenuMedium from "./AffixMenu/AffixMenuMedium";
import HoverAnimation from "../Animations/HoverAnimation";

function FrameMedium(props){

    let {scrolledMenu} = props;

    let centeringDiv={
        paddingTop:'auto',
        paddingBottom:'auto',
        margin:'auto'
    };

    let colorBackground={
        backgroundColor:colorData.background
    };

    let colorBackgroundDark={
        backgroundColor:colorData.backgroundDark
    };

    let colorBackgroundLight={
        backgroundColor:colorData.backgroundLight
    };

    let topRowStyle={
        height:'27px',
        paddingTop:'4px',
        paddingBottom:'2px',
    };


    let searchWidth = '500px';

    let midDivStyle={
        ...colorBackgroundLight,
        height:'64px',

    };
    let headerDivStyle={
        ...colorBackgroundDark,
        height:'64px',
    };

    let styleLogoImg={
        margin: 'auto',
    };

    function renderMenu(){
        if(scrolledMenu){
            return(
                <AffixMenuMedium/>
            );
        }
        else{
            return(

                <Row style={headerDivStyle} type="flex" justify="start" align="middle">
                    <Col style={centeringDiv}>
                        <Search width={searchWidth} size="large" />
                    </Col>
                </Row>
            );
        }
    }

    return(
        <Layout>
            <div style={colorBackground}>
                <Row style={topRowStyle} type="flex" justify="space-between">
                    <Col>
                        <LinkCollection links={AboutUsLinksData} />
                    </Col>
                    <Col>
                        <IconCollection>
                            <HoverAnimation color={colorData.backgroundDark} colorOnHover={colorData.primaryColor}>
                                <BasketIcon size={"medium"}/>
                            </HoverAnimation>
                            <HoverAnimation color={colorData.backgroundDark} colorOnHover={colorData.primaryColor}>
                                <AccountIcon size={"medium"}/>
                            </HoverAnimation>
                            <HoverAnimation color={colorData.backgroundDark} colorOnHover={colorData.primaryColor}>
                                <MenuVertical categoriesData={categoriesData} size={"medium"}/>
                            </HoverAnimation>
                        </IconCollection>
                    </Col>
                </Row>
            </div>
            <Row style={midDivStyle} type="flex" justify="start" align="middle">
                <Col>
                    <img style={styleLogoImg} alt={"Alt logo sklepiku"}  />
                </Col>
            </Row>
            <Affix style={{zIndex:1000}}  offsetTop={0}>
                {renderMenu()}
            </Affix>
            <Content>
                {props.children}
            </Content>
            <Footer><WebsiteFooter /></Footer>
        </Layout>
    );


}

const mapStateToProps= state=>(
    {
        scrolledMenu:state.scrolledMenu,
    }
);

export default connect(mapStateToProps)(FrameMedium);