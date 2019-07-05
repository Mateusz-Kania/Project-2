import React from 'react';
import {Affix, Col, Layout, Row} from "antd";
const { Header, Content, Footer } = Layout;
import AboutUsLinksData from "../Data/AboutUsLinksData";
import categoriesData from "../Data/CategoriesData";
import LinkCollection from "./FrameComponents/LinkCollection";
import Search from './FrameComponents/Search'
import IconCollection from "./FrameComponents/IconSet";
import {connect} from "react-redux";
import colorData from '../Data/ColorsData'
import WebsiteFooter from "./FrameComponents/WebsiteFooter";
import BasketIcon from "./FrameComponents/Icons/BasketIcon";
import MenuVertical from "./FrameComponents/Icons/MenuVertical";
import AccountIcon from "./FrameComponents/Icons/AccountIcon"
import AffixMenu from "./AffixMenu/AffixMenuSmall";

function FrameSmall(props){

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


    let searchWidth = '300px';
    let searchHeight = '40px';
    let midDivStyle={
        ...colorBackgroundLight,
        height:'48px',
    };
    let headerDivStyle={
        ...colorBackgroundDark,
        height:'48px',
    };

    let styleLogoImg={
        margin: 'auto',
    };



     let firstDivStyle={
            ...colorBackground,
            ...topRowStyle
        };

     let secondDivStyle={
            textAlign:'right',
            marginRight: '10px',
        };

    function renderMenu(){
        if(scrolledMenu){
            return(
                <AffixMenu/>
            );
        }
        else{
            return(
                <Row style={headerDivStyle} type="flex" justify="start" align="middle">
                    <Col style={centeringDiv}>
                <Search width={searchWidth} size="medium" />
                    </Col>
                </Row>

            );
        }
    }

    return(
        <Layout>
            <div>
                <div style={firstDivStyle}>
                    <LinkCollection links={AboutUsLinksData} />
                </div>
                <div style={colorBackgroundLight}>
                <div style={secondDivStyle}>
                    <IconCollection>
                        <BasketIcon size={"medium"}/>
                        <AccountIcon size={"medium"}/>
                        <MenuVertical categoriesData={categoriesData} size={"medium"}/>
                    </IconCollection>
                </div>
                </div>
            </div>
            <Row style={midDivStyle} type="flex" justify="start" align="middle">
                <Col>
                <img style={styleLogoImg} alt={"Alt logo sklepiku"}  />
                </Col>
            </Row>
            <Affix offsetTop={0}>
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

export default connect(mapStateToProps)(FrameSmall);