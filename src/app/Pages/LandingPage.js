import React from 'react'
import {connect} from "react-redux";
import PageLayout from "../Components/Layout/PageLayout";
import LPMenu from "../Components/LPMenu";
import LPCarouser from "../Components/LPCarousel";
import LPTiles from "../Components/LPTiles";

function LandingPage(props){


    let {displaySize}=props;
    return(
        <PageLayout>
            <LPMenu/>
            <LPCarouser height="600px" />
            <LPTiles />
        </PageLayout>
    )
}


const mapStateToProps= state=>(
    {
    }
);

export default connect(mapStateToProps)(LandingPage);