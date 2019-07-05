import React from 'react';
import {connect} from 'react-redux';
import {Icon } from 'antd';
import DefaultIconStyle from './DefaultIconStyle'

function BasketIcon(props){

    let {size}= props;

    let iconStyle=DefaultIconStyle(size);

    function handleClick(){
        props.dispatch({type:'ITEM_CLICK',payload:{
                className:"PAGE",
                pageName:"BASKET"
            }});
    }

    return  (
            <Icon onClick={()=>handleClick()} style={iconStyle} type="shopping" />
    );

}

const mapStateToProps= state=>(
    {
    }
);

export default connect(mapStateToProps)(BasketIcon);