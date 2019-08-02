import React from 'react';
import {connect} from "react-redux";
import FrameBig from './FrameBig';
import FrameMedium from './FrameMedium';
import FrameSmall from './FrameSmall';

function Frame(props) {

    let {displaySize}= props;



    if(displaySize==="small"){
        return(
        <FrameSmall>{props.children}</FrameSmall>
        );
    }
    if(displaySize==="medium"){
        return(
        <FrameMedium>{props.children}</FrameMedium>
        );
    }

    return(
        <FrameBig>{props.children}</FrameBig>
    );



}

const mapStateToProps= state=>(
    {
        displaySize:state.displaySize,
    }
);


export default connect(mapStateToProps)(Frame);