import React from 'react';
import {connect} from 'react-redux';
import IconSet from '../FrameComponents/IconSet'
import {Affix, Col, Row} from "antd";
import ChangingText from '../FrameComponents/ChangingText'
import changingTextData from '../../Data/ChangingTextData'
import Search from "../FrameComponents/Search";
import BasketIcon from "../FrameComponents/Icons/BasketIcon";
import AccountIcon from "../FrameComponents/Icons/AccountIcon";
import MenuVertical from "../FrameComponents/Icons/MenuVertical";
import categoriesData from "../../Data/CategoriesData";
import colorData from "../../Data/ColorsData";

function AffixMenuBig(props){

    let {displaySize}=props;

    let fullWidthStyle={
        backgroundColor:colorData.backgroundDark,
        color:"white"

    };

    let centeringDiv={
        margin:'auto'
    };

    let alignRightDiv={
        textAlign:'right'
    };

    let headerDivStyle={
        margin:'auto',
        height:'64px',
    };

    if(displaySize==="desktop")
    {
        headerDivStyle={
            ...headerDivStyle,
            width:'1100px'
        }
    }

    let logoDiv={
        float:'left',
        width:'50px'
    };
    let changingTextDiv={
        float:'left',
        marginLeft:'5px',
        width:'340px'
    };


    let searchWidth='350px';


    return (
        <div style={fullWidthStyle}>
        <Row style={headerDivStyle} type="flex" justify="start" align="middle">
            <Col style={centeringDiv} span={10}>
                <div style={logoDiv}>LOGO
                </div>

                                        <div style={changingTextDiv}>
                        <ChangingText changingTextData={changingTextData} />
                        </div>

            </Col>
            <Col span={9} style={centeringDiv}>
                <Search width={searchWidth} size="large" />
            </Col>
            <Col style={alignRightDiv} span={5}>
                <span className="iconsLight">
                <IconSet>
                    <BasketIcon size="medium" />
                    <AccountIcon size="medium" />
                    <MenuVertical size="medium" categoriesData={categoriesData}/>
                </IconSet>
                </span>
            </Col>
        </Row>
        </div>
    );
}


const mapStateToProps= state=>(
    {
        displaySize:state.displaySize,
        basketItemsCount:state.basketItemsCount,
    }
);

export default connect(mapStateToProps)(AffixMenuBig);