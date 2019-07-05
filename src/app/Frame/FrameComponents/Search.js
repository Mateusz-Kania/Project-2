import React from 'react';
import {connect} from 'react-redux';

import {Input} from 'antd';
let {Search} = Input;

import {searchText} from "../../Data/FrameData";

function SearchComponent(props){

    let {width,size} = props;

    let blockStyle={
        margin:'auto',
        textAlign:'center'
    };

    function handleSearchClick(value){
        props.dispatch({type:'ITEM_CLICK',payload:{
                className:"SEARCH",
                searchValue:value
            }});
    }


    return (
        <div style={blockStyle}>
            <Search
                placeholder={searchText}
                onSearch={value => handleSearchClick(value)}
                style={{ width:width}}
                size={size}
                enterButton
            />
        </div>
    );
}

const mapStateToProps= state=>(
    {
    }
);

export default connect(mapStateToProps)(SearchComponent);