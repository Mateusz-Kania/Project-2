import React from 'react';
import {Col, Layout, Row, Affix} from "antd";
const { Header, Content, Footer } = Layout;
import AboutUsLinksData from "../Data/AboutUsLinksData";
import categoriesData from "../Data/CategoriesData";
import LinkCollection from "./FrameComponents/LinkCollection";
import Search from './FrameComponents/Search'
import IconSet from "./FrameComponents/IconSet";
import {connect} from "react-redux";
import colorData from '../Data/ColorsData'
import MenuHorizontal from "./FrameComponents/MenuHorizontal";
import WebsiteFooter from "./FrameComponents/WebsiteFooter";
import BasketIcon from "./FrameComponents/Icons/BasketIcon";
import AffixMenu from "./AffixMenu/AffixMenuBig";
import HoverAnimation from '../Animations/HoverAnimation'

function FrameBig(props){

    let accountLinks=   [
            {
                id:1,
            class: "LINK_LOGIN",
            page:"LOGIN",
            text: "Zaloguj się",
        },
        {
            id:2,
            class: "LINK_REGISTER",
            page:"REGISTER",
            text: "Zarejestruj się",
        },
    ];

    let {displaySize,scrolledMenu}= props;

    let colorBackground={
        backgroundColor:colorData.background
    };

    let colorBackgroundDark={
        backgroundColor:colorData.backgroundDark
    };

    let colorBackgroundLight={
        backgroundColor:colorData.backgroundLight
    };


    let fixWidth={};

    if(displaySize==='desktop') {
        fixWidth = {
            width: '1150px',
            marginLeft: 'auto',
            marginRight: 'auto',
        };
    }

    let topRowStyle={
        ...fixWidth,
        paddingTop:'4px',
        paddingBottom:'2px',
    };

    let midRowStyle={
        ...fixWidth,
        height: '135px',
    };


    let midBasketDivStyle={
        textAlign:'right',
        marginRight: '50px',
    };

    let styleLogoImg={
        margin: 'auto',
    };

    function renderMenu(){

        if(scrolledMenu){
            return(
                <AffixMenu/>
            );
        }
        else{
            return(
                <Header style={colorBackgroundDark}>
                    <Content style={fixWidth}>
            <MenuHorizontal categoryData={categoriesData} />
                    </Content>
                </Header>

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
                  <LinkCollection links={accountLinks} />
              </Col>
          </Row>
          </div>
          <div style={colorBackgroundLight}>
          <Row style={midRowStyle}  type="flex" justify="start" align="middle">
              <Col span={7}>
                  <img style={styleLogoImg} alt={"Alt logo sklepiku"}  />
              </Col>
              <Col span={10}>
                  <Search width={350} size="large" />
              </Col>
              <Col span={7}>
                  <div style={midBasketDivStyle}>
                    <IconSet>
                        <HoverAnimation color={colorData.backgroundDark} colorOnHover={colorData.primaryColor}>
                        <BasketIcon size={"big"}/>
                        </HoverAnimation>
                    </IconSet>
                  </div>
              </Col>

          </Row>
          </div>
          <Affix style={{zIndex:1000}} offsetTop={0}>
              {renderMenu()}
          </Affix>
          <Content>
              {props.children}
          </Content>
          <Footer style={fixWidth}><WebsiteFooter /></Footer>
          </Layout>
    );


}

const mapStateToProps= state=>(
    {
        displaySize:state.displaySize,
        scrolledMenu:state.scrolledMenu,
    }
);

export default connect(mapStateToProps)(FrameBig);