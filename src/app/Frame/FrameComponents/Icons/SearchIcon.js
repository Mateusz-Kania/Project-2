import React from 'react';
import {connect} from 'react-redux';
import {Icon } from 'antd';
import DefaultIconStyle from './DefaultIconStyle'

function SearchIcon(props){

    let {size}= props;

    let iconStyle=DefaultIconStyle(size);

    function handleClick(){
        props.dispatch({type:'ITEM_CLICK',payload:{
                className:"PAGE",
                pageName:"SEARCH"
            }});
    }

    return  (
        <Icon onClick={()=>handleClick()} style={iconStyle} type="search" />
    );

}

const mapStateToProps= state=>(
    {
    }
);

export default connect(mapStateToProps)(SearchIcon);