import React from 'react'
import {connect} from "react-redux";
import {pageMaxWidth} from "../Frame/PageWidthInfo";

function StandardPageContainer(props){

    let {displaySize}=props;

    let containerDiv={

    };

    if(displaySize==="desktop"){
        containerDiv={
            marginLeft:'auto',
            marginRight:'auto',
            width:pageMaxWidth,
            ...containerDiv
        }
    }

    return(
        <div style={containerDiv}>
            {props.children}
        </div>
    );
}


const mapStateToProps= state=>(
    {
        displaySize:state.displaySize,
    }
);

export default connect(mapStateToProps)(StandardPageContainer);