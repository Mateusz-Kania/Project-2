import React from 'react';
import {Row, Col, Input, Icon, Badge} from 'antd';
let {Search} = Input;
import {connect} from 'react-redux';
import MenuVertical from './MenuVertical';
import colors from '@ant-design/colors';
import {categoryData} from "../../Data/FrameData";

class LogoHeader extends  React.Component{

    render() {
        let {displayVertical} = this.props;

        let styleRow= {
            height: '135px',
        };

        let styleLogoImg={
            margin: 'auto',
        };
        let blockStyle={
            margin:'auto',
            textAlign:'center'
        };
        let blockStyleBasket={
            margin:'auto',
            paddingRight:'40px',
            textAlign:'right'
        };

        let styleBasketIcon;

        let logoCol=(
            <Col span={displayVertical ? 10 : 7} offset={displayVertical ? 4 : 0}>
                <div style={blockStyle}>
                    <img style={styleLogoImg} alt={"Alt logo sklepiku"}  />
                </div>
            </Col>
        );

        let  searchCol=(
            <Col span={displayVertical ? 24 : 10}>
                <div style={blockStyle}>
                    <Search
                        placeholder="input search text"
                        onSearch={value => console.log(value)}
                        style={{ width: 350, height: 55,color:'red' }}
                        size="large"
                        enterButton
                    />
                </div>
            </Col>
        );

        let basketCol;

        if(displayVertical)
        {
            styleBasketIcon = {
                fontSize: '50px',
            };
            let styleMenuIcon={
                marginLeft:'16px',
                fontSize: '44px',
            };

            basketCol=(
                <Col span={displayVertical ? 10 : 7}>
                    <div style={blockStyleBasket}>
                        <Badge count={5}>
                            <Icon style={styleBasketIcon} type="shopping" />
                        </Badge>
                        <MenuVertical categoryData={categoryData} style={styleMenuIcon} />
                    </div>
                </Col>
            );

            return (
                <span>
                <Row style={styleRow} type="flex" justify="start" align="middle">
                    {logoCol}
                    {basketCol}
                </Row>
                <Row style={styleRow} type="flex" justify="start" align="middle">

                {searchCol}
                  </Row>
                </span>
            );


        }

        styleBasketIcon = {
            fontSize: '80px',
        };

        basketCol=(
            <Col span={7}>
                <div style={blockStyleBasket}>
                    <Badge count={5}>
                        <Icon style={styleBasketIcon} type="shopping" theme="twoTone" />
                    </Badge>
                </div>
            </Col>
        );

        return (

            <Row style={styleRow} type="flex" justify="start" align="middle">
                {logoCol}
                {searchCol}
                {basketCol}
            </Row>
        );
    }
}

const mapStateToProps= state=>(
    {
        displayVertical:state.displayVertical,
    }
);

export default connect(mapStateToProps)(LogoHeader);