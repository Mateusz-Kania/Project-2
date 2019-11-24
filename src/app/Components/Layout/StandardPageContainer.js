import React from 'react'
import {connect} from "react-redux";
import {pageMaxWidth} from "../../Data/Static/PageWidthInfo";

function StandardPageContainer(props){

    let {displaySize,width=null}=props;

    width=width||pageMaxWidth;

    let containerDiv={

    };

    if(displaySize==="desktop"){
        containerDiv={
            position:'relative',
            marginLeft:'auto',
            marginRight:'auto',
            width,
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