import React from 'react';
import {connect} from 'react-redux';
import {Icon } from 'antd';
import DefaultIconStyle from './DefaultIconStyle'

function AccountIcon(props){

    let {size}= props;

    let iconStyle=DefaultIconStyle(size);

    function handleClick(){
        props.dispatch({type:'ITEM_CLICK',payload:{
                className:"PAGE",
                pageName:"ACCOUNT"
            }});
    }

    return  (
        <Icon onClick={()=>handleClick()} style={iconStyle} type="user" />
    );

}

const mapStateToProps= state=>(
    {
    }
);

export default connect(mapStateToProps)(AccountIcon);