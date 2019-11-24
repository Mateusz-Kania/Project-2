import React from 'react';
import {connect} from 'react-redux';

import {Input} from 'antd';
let {Search} = Input;


function SearchComponent(props){

    let {width,size,text} = props;

    let blockStyle={
        margin:'auto',
        width
    };

    function handleSearchClick(value){
        let filtersChange={
            slug:'SEARCH_VALUE',
            value
        }
        console.log(filtersChange)
    }


    return (
        <div style={blockStyle}>
            <Search
                placeholder={text}
                onSearch={handleSearchClick}
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