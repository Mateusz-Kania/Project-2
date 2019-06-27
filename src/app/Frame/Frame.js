import React from 'react';
import { Layout} from 'antd';
import TopLinks from './FrameComponents/TopLinks';
import LogoHeader from './FrameComponents/LogoHeader';
import {connect} from "react-redux";
import MenuHorizontal from "./FrameComponents/MenuHorizontal";
import WebsiteFooter from "./FrameComponents/WebsiteFooter";
const { Header, Content, Footer } = Layout;
import {topLinksLeftData,topLinksRightData,categoryData} from '../Data/FrameData'
import colorData from '../Data/ColorsData'

class Frame extends React.Component{
    render() {
        let {displayContentWidth, displayVertical, colorsData} = this.props;
        let topLinksStyleFullwidth={
        };

        let topLinksStyle={
            paddingTop:'4px',
            paddingBottom:'2px',
            width: displayContentWidth,
            marginLeft:'auto',
            marginRight:'auto',
        };
        let logoHeaderStyleFullwidth={
            backgroundColor:colorData.backgroundLight,
        };


        let logoHeaderStyle={
            width: displayContentWidth,
            marginLeft:'auto',
            marginRight:'auto',
        };


        let horizontalMenuStyleFullwidth={
        };


        let horizontalMenuStyle={
            width: displayContentWidth,
            marginLeft:'auto',
            marginRight:'auto',
        };

        let menuHorizontal="";
        if(!displayVertical){
            menuHorizontal=(
                <Header style={horizontalMenuStyleFullwidth}>
                    <Content style={horizontalMenuStyle}>
                        <MenuHorizontal categoryData={categoryData} />
                    </Content>
                </Header>
            );

        }


        return (
            <Layout className="layout">
                <Content style={topLinksStyleFullwidth}>
                <Content style={topLinksStyle}>
                    <TopLinks topLinksLeftData={topLinksLeftData} topLinksRightData={topLinksRightData} />
                </Content>
                </Content>
                <Content style={logoHeaderStyleFullwidth}>
                <Content style={logoHeaderStyle}>
                    <LogoHeader categoryData={categoryData} />
                </Content>
                </Content>
                {menuHorizontal}
                <Content>
                    {this.props.children}
                </Content>
                <Footer style={topLinksStyle}><WebsiteFooter /></Footer>
            </Layout>);
    }
}


const mapStateToProps= state=>(
    {
        displayContentWidth:state.displayContentWidth,
        displayVertical:state.displayVertical,
    }
);

export default connect(mapStateToProps)(Frame);