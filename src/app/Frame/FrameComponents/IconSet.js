import React from 'react';
import {connect} from 'react-redux';
function IconSet(props){

    let {notMargin}=props;

    let spanStyle={};
    if(!notMargin) {
        spanStyle = {
            marginLeft: '5px',
            marginRight: '5px'
        };
    }

    return (
        <span style={spanStyle}>
            {props.children}
        </span>
    );
}



export default IconSet;