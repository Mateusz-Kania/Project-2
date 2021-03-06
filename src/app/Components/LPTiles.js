import React from 'react';
import tilesItems from "../Data/LandingPageTiles";
import LPTilesItem from './LPTiles/LPTilesItem';
import {Col,  Row} from "antd";
import {pageMaxWidth} from "../Data/Static/PageWidthInfo";
import {connect} from "react-redux";
import colorsData from '../Data/Static/ColorsData'

function LPTiles(props) {

    let {displaySize} = props;

    let setWidthStyle={
        backgroundColor:colorsData.backgroundLight,
        padding:'5px',
    };
    let itemSpan;

    if(displaySize==="desktop"){

        setWidthStyle = {
            ...setWidthStyle,
            width: pageMaxWidth,
            marginLeft: 'auto',
            marginRight: 'auto',
        };
        itemSpan=8;
    }
    else if(displaySize==="tablet"){
        itemSpan=8;
    }
    else if(displaySize==="medium"){
        itemSpan=12;
    }
    else{
        itemSpan=24;
    }

    function handleOnClickItem(page){
        props.dispatch({type:'ITEM_CLICK',payload:{
                className:"PAGE",
                pageName:page,
            }})

    }

    function mapTilesItems(tilesItem){

        return(
            <Col key={tilesItem.id} span={itemSpan}>
                <span onClick={()=>{handleOnClickItem(tilesItem.page)}}>
                <LPTilesItem image={tilesItem.image}/>
                </span>
            </Col>
        );
    }

    return(
        <div style={setWidthStyle}>
        <Row>
            {tilesItems.map(mapTilesItems)}
        </Row>
        </div>

    );
}

const mapStateToProps= state=>(
    {
        displaySize:state.displaySize,
    }
);

export default connect(mapStateToProps)(LPTiles);

