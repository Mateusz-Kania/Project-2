import React from 'react';
import {Layout} from "antd";
import {connect} from "react-redux";
import WebsiteFooter from "./PageLayout/WebsiteFooter";
import {pageMaxWidth} from "../../Data/Static/PageWidthInfo"

function FrameBig(props){

    let {displaySize}= props;


    let fixWidth={};

    if(displaySize==='desktop') {
        fixWidth = {
            width: pageMaxWidth,
            marginLeft: 'auto',
            marginRight: 'auto',
        };
    }

    return(
        <Layout>
            <Layout.Content>
                {props.children}
            </Layout.Content>
            <Layout.Footer style={fixWidth}><WebsiteFooter /></Layout.Footer>
        </Layout>
    );


}

const mapStateToProps= state=>(
    {
        displaySize:state.displaySize,
    }
);

export default connect(mapStateToProps)(FrameBig);